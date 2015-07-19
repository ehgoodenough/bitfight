var datauri = require("datauri")
var fs = require("fs")

fs.readdir("./assets", function(error, files) {
    files.forEach(function(file) {
        datauri("./assets/" + file, function(error, data) {
            var string = '"' + file + '": "' + data + '",\n'
            fs.appendFile("data.txt", string)
        })
    })
})
