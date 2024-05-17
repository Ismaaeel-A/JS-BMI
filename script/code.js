/* let height = 1.73
height *= height
let weight = 70

console.log(weight / height) */

let height = document.querySelector(".height")
let weight = document.querySelector(".weight")

function calculate() {
    height.value
    height.value *= height.value

    weight.value
    let BMI = +weight.value / +height.value
    
    document.querySelector(".print").innerHTML = BMI
    document.querySelector(".height").innerHTML = null
    document.querySelector(".weight").innerHTML = null
}