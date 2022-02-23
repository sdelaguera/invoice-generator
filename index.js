
let requestedServices = []
let requestedPrice = []
let totalAmount = 0
let washCarBtn = document.getElementById("wash-car")
let mowLawnBtn = document.getElementById("mow-lawn")
let pullWeedsBtn = document.getElementById("pull-weeds")
let serviceName = document.getElementById("service-name")
let servicePrice = document.getElementById("service-price")
let totalAmountEl = document.getElementById("total-amount")
let sendBtn = document.getElementById("send-btn")

washCarBtn.addEventListener("click", function() {
    requestedPrice.push(10)
    requestedServices.push("Wash Car")
    renderServices()
    washCarBtn.disabled = true

    })

mowLawnBtn.addEventListener("click", function() {
    requestedPrice.push(20)
    requestedServices.push("Mow Lawn")
    renderServices()
    mowLawnBtn.disabled = true

    })

pullWeedsBtn.addEventListener("click", function() {
    requestedPrice.push(30)
    requestedServices.push("Pull Weeds")
    renderServices()
    pullWeedsBtn.disabled = true

    })

sendBtn.addEventListener("click", function() {
    washCarBtn.disabled = false
    mowLawnBtn.disabled = false
    pullWeedsBtn.disabled = false
    requestedServices = []
    requestedPrice = []
    totalAmount = 0
    renderServices()

})



function renderServices() {
    serviceName.innerHTML = ""
    servicePrice.innerHTML = ""
    totalAmount = 0

    for (let i = 0; i < requestedPrice.length; i++) {
        serviceName.innerHTML += `
        <p>${requestedServices[i]} 
        <button id="remove-button" onclick="deleteService(${requestedServices[i]})">Remove</button> 
        </p>`
        servicePrice.innerHTML += `<p>$${requestedPrice[i]}</p>`
        totalAmount += requestedPrice[i]
    }
    totalAmountEl.innerHTML = `$${totalAmount}`
}

function deleteService(service) {
    let index = requestedServices.indexOf(service)
    console.log(index)
    requestedServices.splice(index)
    renderServices()

}