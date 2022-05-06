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