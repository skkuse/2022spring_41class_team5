const fs = require('fs')
const {exec} = require('child_process')
const path = require('path')

const saveFile = (name, data) => {
    return new Promise((resolve, reject) => {
        console.log("SAVING FILES")
        fs.writeFileSync(name, data, function(err) {
            if (err) {
                console.log("error", err)
                reject()
            } else {
                console.log("The File was saved!")
                resolve()
            }
        })
        console.log("file saved in saveFile")
    })
}

// const cExecute = (data, input) => {
//     const res = {
//         err: false,
//         msg: ""
//     }
//     return new Promise((resolve, reject) => {
//         const fileName = "test.c"
//         saveFile(fileName, data)
//             .then(() => {
//                 fs.writeFileSync("input.txt", input, function(err) {
//                     if (err) {
//                         console.log(err)
//                         reject()
//                     }
//                 })
//                 const filePath = path.join(__dirname, "../test.c")
//                 console.log("FILE PATH >> " + filePath)

//                 exec("gcc " + filePath, (err, stdout, stderr) => {
//                     if (err) {
//                         console.error(`exec error: ${err}`)
//                         resolve({
//                             err: true,
//                             output: err,
//                             error: stderr
//                         })
//                     }

//                     console.log("SUCCESSFULLY COMPILED")
//                     exec('a.exe < ' + 'input.txt', (err, stdout, stderr) => {
//                         if (err) {
//                             console.log("ERROR " + err)
//                             resolve({
//                                 err: true,
//                                 output: err,
//                                 error: stderr
//                             })
//                         }

//                         console.log("OUTPUT " + stdout)
//                         resolve({
//                             err: false,
//                             output: stdout
//                         })
//                     })
//                 })
//             })
//             .catch((e) => {
//                 console.log("ERROR SAVE FILE " + e)
//                 const err = {
//                     err: true,
//                     output: "Internal Server Error!"
//                 }
//                 resolve(err)
//             })
//     })
// }

// const cPlusPlusExecute = (data, input) => {
//     const res = {
//         err: false,
//         msg: ""
//     }
//     return new Promise((resolve, reject) => {
//         const fileName = "test.cpp"
//         saveFile(fileName, data)
//             .then(() => {
//                 fs.writeFileSync("input.txt", input, function(err) {
//                     if (err) {
//                         console.log(err)
//                         reject()
//                     }
//                 })
//                 const filePath = path.join(__dirname, "../test.cpp")
//                 console.log("FILE PATH >> " + filePath)

//                 exec("g++ " + filePath, (err, stdout, stderr) => {
//                     if (err) {
//                         console.error(`exec error: ${err}`)
//                         resolve({
//                             err: true,
//                             output: err,
//                             error: stderr
//                         })
//                     }

//                     console.log("SUCCESSFULLY COMPILED")
//                     exec('a.exe < ' + 'input.txt', (err, stdout, stderr) => {
//                         if (err) {
//                             console.log("ERROR " + err)
//                             resolve({
//                                 err: true,
//                                 output: err,
//                                 error: stderr
//                             })
//                         }

//                         console.log("OUTPUT " + stdout)
//                         resolve({
//                             err: false,
//                             output: stdout
//                         })
//                     })
//                 })
//             })
//             .catch((e) => {
//                 console.log("ERROR SAVE FILE " + e)
//                 const err = {
//                     err: true,
//                     output: "Internal Server Error!"
//                 }
//                 resolve(err)
//             })
//     })
// }

// const javaExecute = (data, input) => {
//     const res = {
//         err: false,
//         msg: ""
//     }
//     return new Promise((resolve, reject) => {
//         const fileName = "test.java"
//         saveFile(fileName, data)
//             .then(() => {
//                 fs.writeFileSync("input.txt", input, function(err) {
//                     if (err) {
//                         console.log(err)
//                         reject()
//                     }
//                 })
//                 const filePath = path.join(__dirname, "../test.java")
//                 console.log("FILE PATH >> " + filePath)

//                 exec("javac " + filePath, (err, stdout, stderr) => {
//                     if (err) {
//                         console.error(`exec error: ${err}`)
//                         resolve({
//                             err: true,
//                             output: err,
//                             error: stderr
//                         })
//                     }

//                     console.log("SUCCESSFULLY COMPILED")
//                     exec('java test < ' + 'input.txt', (err, stdout, stderr) => {
//                         if (err) {
//                             console.log("ERROR " + err)
//                             resolve({
//                                 err: true,
//                                 output: err,
//                                 error: stderr
//                             })
//                         }

//                         console.log("OUTPUT " + stdout)
//                         resolve({
//                             err: false,
//                             output: stdout
//                         })
//                     })
//                 })
//             })
//             .catch((e) => {
//                 console.log("ERROR SAVE FILE " + e)
//                 const err = {
//                     err: true,
//                     output: "Internal Server Error!"
//                 }
//                 resolve(err)
//             })
//     })
// }

const pythonExecute = (data, input) => {
    const res = {
        err: false,
        msg: ""
    }
    return new Promise((resolve, reject) => {
        const fileName = "test.py"
        saveFile(fileName, data).then(() => {
                // fs.writeFile("input.txt", input, function(err) {
                //     if (err) {
                //         console.log(err)
                //         reject()
                //     } else {
                //         console.log("input.txt 생성")
                //     }
                // })
                // const filePath = path.join(__dirname, "../test.py")
                // console.log("FILE PATH >> " + filePath)
                // const inputPath = path.join(__dirname, "../input.txt")

                // exec("python3 " + filePath + " < " + inputPath, (err, stdout, stderr) => {
                //     if (err) {
                //         console.error(`exec error: ${err}`)
                //         resolve({
                //             err: true,
                //             output: err,
                //             error: stderr
                //         })
                //     }
                //     resolve({
                //         err: false,
                //         output: stdout
                //     })
                // })
            })
            .catch((e) => {
                console.log("ERROR SAVE FILE " + e)
                const err = {
                    err: true,
                    output: "Internal Server Error!"
                }
                resolve(err)
            })

            fs.writeFile("input.txt", input, function(err) {
                if (err) {
                    console.log(err)
                    reject()
                } else {
                    console.log("input.txt 생성")
                }
            })
            const filePath = path.join(__dirname, "../test.py")
            console.log("FILE PATH >> " + filePath)
            const inputPath = path.join(__dirname, "../input.txt")

            exec("python3 " + filePath + " < " + inputPath, (err, stdout, stderr) => {
                if (err) {
                    console.error(`exec error: ${err}`)
                    resolve({
                        err: true,
                        output: err,
                        error: stderr
                    })
                }
                resolve({
                    err: false,
                    output: stdout
                })
            })
    })
}

module.exports = {
    pythonExecute
}