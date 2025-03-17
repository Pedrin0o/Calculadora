function appendnumber(number) {
    document.getElementById("display").value += number
}

function appendOperator(operator) {
    document.getElementById("display").value += operator
}

function clearDisplay() {
    document.getElementById("display").value = ""
}

function calculateResult() {
    let display = document.getElementById("display"); // Obtém o input da calculadora

    try {
        display.value = math.evaluate(display.value); // Avalia a expressão com segurança
    } catch (error) {
        display.value = "Erro"; // Se houver erro na expressão, exibe "Erro"
    }
}
