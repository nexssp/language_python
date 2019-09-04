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
    install: "scoop install python3",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "python3",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.python.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "scoop install pip3",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "pip3 list <args>",
    search: "pip3 search <args>",
    install: "pip3 install <args>",
    uninstall: "pip3 remove <args>",
    help: "pip3 <args>",
    version: "pip3 version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "pip3 <default> <args>"
  }
};

module.exports = languageConfig;
