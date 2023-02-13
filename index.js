
 const meter = 3.281 
 const liter = 0.264 
 const kilogram = 2.204 

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputEl = document.getElementById("input-field")

convertBtn.addEventListener("click",function(){
    lengthEl.innerHTML = `
         ${inputEl.value} meters = ${(inputEl.value * meter).toFixed(3)} feet |
          ${inputEl.value} feet =  ${(inputEl.value / meter).toFixed(3)} meter
    `
        volumeEl.innerHTML = `
         ${inputEl.value} liters = ${(inputEl.value * liter).toFixed(3)} gallons |
          ${inputEl.value} gallons =  ${(inputEl.value / liter).toFixed(3)} liters
    `
        massEl.innerHTML = `
         ${inputEl.value} kilos = ${(inputEl.value * kilogram).toFixed(3)} pounds |
          ${inputEl.value} pounds =  ${(inputEl.value / kilogram).toFixed(3)} kilos
    `
})