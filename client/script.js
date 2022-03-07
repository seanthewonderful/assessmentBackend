//const { send } = require("express/lib/response")

// const res = require("express/lib/response")

// const { format } = require("express/lib/response")

const baseURL = `http://localhost:4000`

console.log("connected")

const fortuneBtn = document.querySelector("#fortuneButton")
const bodyTag = document.querySelector('body')
const ducksBtn = document.querySelector("#quack")
const fingerBtn = document.querySelector("#fingerBtn")
const deleteFinger = document.querySelector("#deleteFinger")
const addFamousFinger = document.querySelector("#famousFingers")

const fortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(function (res) {
            const data = res.data
            alert(data)
        })
}

const quacks = () => {
    axios.get(`${baseURL}/api/ducks`)
    .then(function(res){
        let newH = document.createElement('H4')
        newH.textContent = res.data
        bodyTag.appendChild(newH)
    })
}

const createFinger = (event) => {
    event.preventDefault()
    let fingerInput = document.querySelector("#fingerInput")
    // let newP = document.createElement('p')
    let newFinger = fingerInput.value
    let body = { newFinger }
    axios.post(`${baseURL}/api/fingers`, body)
    .then((res) => {
        let finger = res.data[res.data.length - 1]
        alert(finger)
        // res.status(200).send(fingers)
        // console.log(fingers)
        // newP.textContent = res.data
        // bodyTag.appendChild(newP)
    })
    .catch(err => console.log(err))
    fingerInput.value = ''
}

// Jeddy tutorial for POST
/* 
function createFinger() {
    let fingerInput = document.querySelector("#fingerInput")
    const newFinger = fingerInput.value
    const body = {
        newFinger //same as newFinger = newFinger.value
    }

    axios.post(`${baseURL}/api/fingers`, body)
        .then((res) => {
            let name = res.data[res.data.length - 1]
            alert(name)
            newFinger.value = ''
        })
}
*/

// function editFingers() {
//     const fingerChange = famousFingerInput.value
//     const indexChange = newIndexInput.value
//     const body = {
//         fingerChange
//     }
//     axios.put(`${baseURL}/api/edit/${indexChange}`, body)
// }



// const updateFinger = (event) => {
//     event.preventDefault()
//     let famousFing = document.querySelector("option")
//     fingers.pop(famousFing)
//     res.status(200).send(fingers)
// }

const deleteFing = (event) => {
    //const newIndex = indexInput.value  <--if you want to delete based on an input. In this case we used a number to just represent an index. Just make an input and querySelect it as indexInput
    event.preventDefault();
    axios.delete(`${baseURL}/api/delete/`)
        .then((res) => {
            console.log(res.data)
            // res.status(200).send(fingers)
        })
}

deleteFinger.addEventListener("click", deleteFing)
fingerBtn.addEventListener("click", createFinger)
ducksBtn.addEventListener("click", quacks)
fortuneBtn.addEventListener("click", fortune)