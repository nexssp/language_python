// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;
let sudo = process.sudo;

// To implement pyenv?
let setupPyenv = `${sudo}apt-get update -y && ${sudo}apt-get install -y make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev python-openssl git \
&& ${sudo}curl https://pyenv.run | ${sudo}bash && pyenv install 3.8 && python -m ensurepip`;

let setupPPA = `${sudo}apt-get update -y && ${sudo}apt-get -y install software-properties-common apt-utils \
&& ${sudo}add-apt-repository ppa:deadsnakes/ppa && ${sudo}apt-get update && `;

let languageConfig = Object.assign({}, require("./python.win32.nexss.config")); //We get setup from windows and modify it.

languageConfig.compilers = {
  uv: {
    install: "curl -LsSf https://astral.sh/uv/install.sh | sh",
    command: "uv",
    args: "run <file>",
    run: `uv run python -c`,
    help: ``,
  },
  python3: {
    install: setupPPA + `${sudo}apt-get install -y python3.8`,
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
  case process.distros.UBUNTU:
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

// for Linux are the same commands
// languageConfig.languagePackageManagers = {
//   pip3: {
//     installation: "choco install pip3",
//     messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
//     req: "python3 -m pip install -r requirements.txt",
//     freeze: "python3 -m pip freeze > requirements.txt",
//     installed: "python3 -m pip list",
//     search: "python3 -m pip search",
//     install: "python3 -m pip install",
//     uninstall: "python3 -m pip remove",
//     help: "python3 -m pip",
//     version: "python3 -m pip --version",
//     init: () => {},
//     // if command not found in specification
//     // run directly on package manager
//     else: "pip3",
//   },
// };

module.exports = languageConfig;
