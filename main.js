const Formula = document.querySelector("#formula-select")
const Result = document.querySelector("#result")
const Symbol = document.querySelector("#symbol")


Formula.addEventListener ("input", change)


function change () {
    let form = Formula.value
    Result.textContent = form

    if (form == "The length is ...") {
        Symbol.textContent = "L"
    } else if (form == "The Width") {
        Symbol.textContent = "W"

    } else {
        Symbol.textContent = "H"
    }
}

