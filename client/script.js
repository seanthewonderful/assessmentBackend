//const { send } = require("express/lib/response")

const res = require("express/lib/response")

// const { format } = require("express/lib/response")

const baseURL = `http://localhost:4000`

console.log("connected")

const fortuneBtn = document.querySelector("#fortuneButton")
const bodyTag = document.querySelector('body')
const ducksBtn = document.querySelector("#quack")
const fingerBtn = document.querySelector("#fingerBtn")
const deleteFinger = document.querySelector("#deleteFinger")

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
    let newP = document.createElement('p')
    let body = { newFinger: fingerInput.value }
    axios.post(`${baseURL}/api/fingers`, body)
    .then((res) => {
        newP.textContent = res.data
        bodyTag.appendChild(newP)
    })
    .catch(err => console.log(err))
    fingerInput.value = ''
}

const updateFinger = (event) => {
    event.preventDefault()
    let famousFing = document.querySelector("option")
    fingers.pop(famousFing)
    res.status(200).send(fingers)
}


// deleteFinger.addEventListener("click", deleteFing)
fingerBtn.addEventListener("click", createFinger)
ducksBtn.addEventListener("click", quacks)
fortuneBtn.addEventListener("click", fortune)