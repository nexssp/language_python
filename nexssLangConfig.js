module.exports = {
  description: "Python 3",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  description: "Python 3",
  compiler: "python3",
  extension: ".py",
  pm: {
    win32: "pip3 install",
    darwin: "pip3 install",
    linux: "pip3 install"
  },
  pmInstall: {
    win32: "scoop install pip3",
    darwin: "brew install pip3",
    linux: "sudo apt-get update && sudo apt-get install python3-pip -y"
  },
  pmInstallDescription: {
    win32: "",
    darwin: "",
    linux: ""
  },
  url: "www.python.org",
  errors: {
    "ModuleNotFoundError: No module named '(.*?)'": {
      win32: "nexss install py <module> OR pip3 install <module>",
      darwin: "nexss install py <module> OR pip3 install <module>",
      linux: "nexss install py <module> OR pip3 install <module>"
    },
    "not found": {
      win32: "nexss install py <module> OR pip3 install <module>",
      darwin: "nexss install py <module> OR pip3 install <module>",
      linux: "nexss install py <module> OR pip3 install <module>"
    }
  }
};
