const Formula = document.querySelector("#formula-select")
const Result = document.querySelector("#result")
const Symbol = document.querySelector("#symbol")


Formula.addEventListener ("input", change)
let form = Formula.value
Result.textContent = form
function change () {
    form = Formula.value
    Result.textContent = form

    if (form == "The length") {
        Symbol.textContent = "L"
    } else if (form == "The Width") {
        Symbol.textContent = "W"

    } else {
        Symbol.textContent = "H"
    }
}

