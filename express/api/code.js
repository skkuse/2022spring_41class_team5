const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get('/test', (req, res) => {
    res.json({msg: "code route"})
})

const deleteFile = (filename) => {
    fs.unlink(filename, function(err) {
        if (err) {
            console.log("SORRY NOT DELETED")
        }

        console.log("File Deleted!")
    })
}

const execute = require('./compile')

router.post('/submit', (req, res) => {
    console.log(req.body)

    const code = req.body.code
    const input = req.body.input
    const lang = req.body.lang

    switch(lang) {
        case "python": return execute.pythonExecute(code, input)
                                .then(data => {
                                    console.log("SUCCESSFULL PROMISE " + data)
                                    console.log("SENDING " + data.output)
                                    result = ""
                                    result += data.output
                                    console.log("result", JSON.stringify({"result": result}))
                                    res.json({result: result})
                                    deleteFile(path.join(__dirname, '../input.txt'))
                                    deleteFile(path.join(__dirname, '../test.py'))
                                    deleteFile(path.join(__dirname, '../a.exe'))
                                })
                                .catch(err => {
                                    console.log("ERROR PROMISE " + err)
                                    deleteFile(path.join(__dirname, '../../input.txt'))
                                    deleteFile(path.join(__dirname, '../../test.py'))
                                    deleteFile(path.join(__dirname, '../../a.exe'))
                                })
    }
})

module.exports = router