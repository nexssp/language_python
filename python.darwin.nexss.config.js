// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

let languageConfig = Object.assign({}, require("./python.win32.nexss.config")); //We get setup from windows and modify it.
languageConfig.compilers = {
  python3: {
    install: "brew install python",
    command: "python3",
    args: "<file>",
    help: ``,
  },
  python27: {
    install: "brew install python",
    command: "python2",
    templates: "templates27",
    args: "<file>",
    help: ``,
  },
  blender: {
    install: "brew install blender",
    command: "blender",
    templates: "templatesBlender",
    args: "--python <file>",
    help: ``,
    interactive: "--python-console",
  },
};

module.exports = languageConfig;
