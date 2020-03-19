const shell = require("shelljs")

const calculateSemvar = () => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git')
        shell.exit(1)
    }
    if (!shell.which('sourcekitten')) {
        shell.echo('Sorry, this script requires sourcekitten')
        shell.exit(1)
    }
    console.log("calculateSemvar")
    if (!isInsideGitRepo()) {
        shell.echo('Not running inside a git repo')
        shell.exit(1)
    }
    getTagsAndVersions()
}

const isInsideGitRepo = () => {
    return true
}

const getTagsAndVersions = () => {
    const hashes = shell.exec("git rev-list --tags").toString().slice(0, -1).split("\n")
    console.log(hashes)
    let output = []
    hashes.forEach( hash => {
        const tag = shell.exec(`git describe --always --tags ${hash}`).toString().slice(0, -1)
        output.push( {hash: hash, tag: tag})
    })
    console.log(output)
    return output
}


module.exports = calculateSemvar