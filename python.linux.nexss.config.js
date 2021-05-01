// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;
let sudo = process.sudo;

let setupPPA = `${sudo}apt update && ${sudo}apt install software-properties-common && ${sudo}add-apt-repository ppa:deadsnakes/ppa && ${sudo}apt update && `;
let languageConfig = Object.assign({}, require("./python.win32.nexss.config")); //We get setup from windows and modify it.

languageConfig.compilers = {
  python3: {
    install: setupPPA + `${sudo}apt install python3.8`,
    command: "python3",
    args: "<file>",
    help: ``,
  },
  blender: {
    install: `${sudo}apt install blender`,
    command: "blender",
    templates: "templatesBlender",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console",
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!

switch (distName) {
  case process.distros.ORACLE:
    languageConfig.compilers.python3.install = process.replacePMByDistro(
      "apt update -y && apt install -y oracle-epel-release-el7 python3"
    );
    break;
  case process.distros.AMAZON:
    languageConfig.compilers.python3.install = process.replacePMByDistro(
      "apt update -y && apt install -y python3"
    );
    break;
  case process.distros.ALPINE:
    languageConfig.compilers.python3.install = process.replacePMByDistro(
      "apt update -y && apt install -y python3 py3-pip && ln -sf /usr/bin/python3.* /usr/bin/python && ln -sf /usr/bin/python3.* /usr/bin/python3"
    );

    break;
  default:
    languageConfig.compilers.python3.install = process.replacePMByDistro(
      "apt update && apt install -y python python3-pip"
    );
    languageConfig.compilers.blender.install = process.replacePMByDistro(
      "apt update && apt install -y blender"
    );
    break;
}

languageConfig.languagePackageManagers = {
  pip3: {
    installation: "choco install pip3",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    req: "python3 -m pip install -r requirements.txt",
    freeze: "python3 -m pip freeze > requirements.txt",
    installed: "python3 -m pip list",
    search: "python3 -m pip search",
    install: "python3 -m pip install",
    uninstall: "python3 -m pip remove",
    help: "python3 -m pip",
    version: "python3 -m pip --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "pip3",
  },
};

module.exports = languageConfig;
