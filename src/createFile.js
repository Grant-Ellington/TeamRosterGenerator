const cards = require('../index')
const fs = require('fs')

function createFile (cards) { 
    console.log(cards)
    const fileHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel = stylesheet href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel = "stylesheet" type = "text/css" href="./style.css">
    </head>
    <body>
        <div class="navbar-expand-sm">
            <h1>Team Generator</h1>
        </div>
        <div class="conatianer-sm">
            ${cards}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>`
    fs.writeFile('dist/index.html', fileHTML, (err) =>
    err ? console.log(err) :console.log('success'))
}

module.exports = createFile