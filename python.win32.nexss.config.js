// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Python 3";
languageConfig.description =
  "Python is a programming language that lets you work quickly and integrate systems more effectively.";
languageConfig.url = "https://www.python.org/";
languageConfig.extensions = [".py"];
// languageConfig.compiler = "python3";
languageConfig.builders = {
  // pyinstaller: {
  //   install: "pip3 install auto-py-to-exe",
  //   installNightly:
  //     "pip install https://github.com/pyinstaller/pyinstaller/archive/develop.tar.gz",
  //   //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
  //   command: "pyinstaller",
  //   build: function() {
  //     const path = require("path");
  //     //take command from current folder
  //     return path.join(__dirname, "build", "customCompiler.win32.python.cmd");
  //   },
  //   args: "<file> <destinationDirectory>", //%1 source, %2 --destdir pyinstaller -y -F --distpath %2 %1
  //   // C++ needs to be build to exe, so no compile option
  //   help: ``
  // }
};
languageConfig.compilers = {
  python3: {
    install: "scoop install python",
    command: "python3",
    args: "<file>",
    help: ``
  },
  python27: {
    install: "scoop install python27",
    command: "python2",
    args: "<file>",
    help: ``
  },
  blender: {
    install:
      "scoop bucket rm extras && scoop bucket add extras && scoop install blender",
    command: "blender",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console"
  },
  gimp: {
    install:
      "scoop bucket rm extras && bucket add extras && scoop install gimp",
    command: "gimp",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console"
  },
  python36: {
    install: "scoop install python36",
    command: "python3",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.python.errors");
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
    else: "pip3"
  }
};

module.exports = languageConfig;
