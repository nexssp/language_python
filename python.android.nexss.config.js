// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

let languageConfig = Object.assign({}, require("./python.win32.nexss.config")); //We get setup from windows and modify it.
languageConfig.compilers = {
  python3: {
    install: `apt-get install -y python`,
    command: "python3",
    args: "<file>",
    help: ``,
  },
};


module.exports = languageConfig;
