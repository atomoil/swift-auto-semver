
const shell = require("shelljs")
const calculateSemvar  = require("./lib/auto_semvar")


const argv = require('yargs')
    .argv

if (argv._ == "") {
    console.error("No path supplied")
    return
}

const gitfolder = argv._.join(" ") // what about spaces in folder names?
const currFolder = shell.pwd().toString()
shell.cd(gitfolder)
if (shell.pwd().toString() == currFolder) {
    console.error("provided path wasn't valid")
    return
}

calculateSemvar()