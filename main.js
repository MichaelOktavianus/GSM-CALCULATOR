const Formula = document.querySelector("#formula-select")
const resultBox = document.querySelector("#result-box")
const Symbol = document.querySelector("#symbol")
const resultBtn = document.querySelector("#result-btn")

const text1 = document.querySelector("#text1")
const text2 = document.querySelector("#text2")
const text3 = document.querySelector("#text3")

const Input1 = document.querySelector("#input1")
const Input2 = document.querySelector("#input2")
const Input3 = document.querySelector("#input3")

const a1 = document.querySelector("#a1")
const a2 = document.querySelector("#a2")
const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const c1 = document.querySelector("#c1")
const c2 = document.querySelector("#c2")

resultBox.addEventListener ("click", function () {
    window.scrollTo (0,-200)
})
resultBtn.addEventListener ("click", calculate)

Formula.addEventListener ("input", change)
Input1.addEventListener ("input", inputChange)
Input2.addEventListener ("input", inputChange)
Input3.addEventListener ("input", inputChange)

let selector = Formula.value


function change () {
    selector = Formula.value
    console.log(selector)
    
    if (selector == "GSM") {
        text1.textContent = "Weight"
        text2.textContent = "Length"
        text3.textContent = "Width"

        a1.textContent = "Gram"
        a2.textContent = "Kilogram"    
        b1.textContent = "Meter"
        b2.textContent = "Centimeter"
        c1.textContent = "Meter"
        c2.textContent = "Centimeter"

    } else if (selector == "Weight") {
        text1.textContent = "GSM"
        text2.textContent = "Length"
        text3.textContent = "Width"

        a1.textContent = "Gram"
        a2.textContent = "Kilogram"    
        b1.textContent = "Meter"
        b2.textContent = "Centimeter"
        c1.textContent = "Meter"
        c2.textContent = "Centimeter"

    } else if (selector == "Length") {
        text1.textContent = "GSM"
        text2.textContent = "Weight"
        text3.textContent = "Width"

        a1.textContent = "Gram"
        a2.textContent = "Kilogram"    
        b1.textContent = "Gram"
        b2.textContent = "Kilogram"
        c1.textContent = "Meter"
        c2.textContent = "Centimeter"

    } else if (selector == "Width") {
        text1.textContent = "GSM"
        text2.textContent = "Weight"
        text3.textContent = "Length"

        a1.textContent = "Gram"
        a2.textContent = "Kilogram"    
        b1.textContent = "Gram"
        b2.textContent = "Kilogram"
        c1.textContent = "Meter"
        c2.textContent = "Centimeter"

    }

}

function inputChange () {
    let targetId = this.getAttribute("id")
    console.log(`${this.value} ${targetId}`) 
}

function calculate () {
    let i1 = Input1.value
    let i2 = Input2.value
    let i3 = Input3.value

    if (i1 == "" || i2 == "" || i3 == "") {
        alert("Please input all the fields")
    } else {
        window.scrollTo(0,200)
    }

    let result
    let Unit

    if (selector == "GSM") {
        result = (i1 / (i2 * i3))
        
        Unit = "GSM"

    } else if (selector == "Weight") {
        result = (i1 * (i2 * i3))
        
        Unit = "g"

    } else if (selector == "Length") {
        result = ((i2 / i1) / i3)
        
        Unit = "m"

    } else if (selector == "Width") {
        result = ((i2 / i1) / i3)
        
        Unit = "m"
    }

    resultBox.textContent = `${Math.floor(result * 100) / 100} ${Unit}`
    
}
 