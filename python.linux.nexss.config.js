// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;
let setupPPA =
  "apt update && apt install software-properties-common && add-apt-repository ppa:deadsnakes/ppa && apt update && ";
let languageConfig = Object.assign({}, require("./python.win32.nexss.config")); //We get setup from windows and modify it.
languageConfig.compilers = {
  python3: {
    install: setupPPA + "apt install python3.8",
    command: "python3",
    args: "<file>",
    help: ``,
  },
  python27: {
    install: setupPPA + "apt install python2.7",
    command: "python2",
    templates: "templates27",
    args: "<file>",
    help: ``,
  },
  blender: {
    install: "apt install blender",
    command: "blender",
    templates: "templatesBlender",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console",
  },
};

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
