// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

if (process.platform === "win32") {
  const {
    ensureBucketAdded,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/scoop`);
  // We make sure versions bucket is added (this will be not checked after config is cached.)
  ensureBucketAdded("versions");
}

let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);

languageConfig.title = "Python";
languageConfig.description =
  "Python is a programming language that lets you work quickly and integrate systems more effectively.";
languageConfig.url = "https://www.python.org";
languageConfig.founders = ["Guido van Rossum"];
languageConfig.developers = [""];
languageConfig.years = ["1991"];
languageConfig.extensions = [".py"];
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
  // Default python 3.8
  python: {
    install: "scoop install python38",
    command: "python38",
    args: "<file>",
  },
  python37: {
    install: "scoop install python37",
    command: "python37",
    args: "<file>",
  },
  python39: {
    install: "scoop install python39",
    command: "python39",
    args: "<file>",
  },
  python27: {
    install: "scoop install python27",
    command: "python27",
    args: "<file>",
  },
  python2: {
    install: "scoop install python27",
    command: "python2",
    args: "<file>",
    templates: "templates27",
  },
  python3: {
    install: "scoop install python",
    command: "python",
    args: "<file>",
  },
  anaconda: {
    install: "scoop install anaconda",
    command: "python",
    args: "<file>",
  },
  blender: {
    install:
      "scoop bucket rm extras && scoop bucket add extras && scoop install blender",
    command: "blender",
    templates: "templatesBlender",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console",
  },
  gimp: {
    install:
      "scoop bucket rm extras && bucket add extras && scoop install gimp",
    command: "gimp",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console",
  },
  python36: {
    install: "scoop install python36",
    command: "python36",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.python.errors");
languageConfig.replacer = __dirname + "/nexss.python.replacer.js"; // replace strings in errors solutions

// for installing we use pip which is associated with the global config or first one from the list.
let pmCommand =
  languageConfig.compilers[Object.keys(languageConfig.compilers)[0]].command;

if (process.platform === "win32") {
  try {
    pmCommand =
      process.nexssGlobalConfig.languages[
        languageConfig.extensions[0].replace(".", "")
      ].compilers;
  } catch (error) {}
}

languageConfig.languagePackageManagers = {
  pip3: {
    installation: "installed", // Installed?
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    req: `${pmCommand} -m pip install -r requirements.txt`,
    freeze: `${pmCommand} -m pip freeze > requirements.txt`,
    installed: `${pmCommand} -m pip list`,
    search: `${pmCommand}python3 -m pip search`,
    install: `${pmCommand} -m pip install`,
    uninstall: `${pmCommand} -m pip remove`,
    help: `${pmCommand} -m pip`,
    version: `${pmCommand} -m pip --version`,
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "pip3",
  },
};

module.exports = languageConfig;
