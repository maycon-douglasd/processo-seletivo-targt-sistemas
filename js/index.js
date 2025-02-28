function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;
    SOMA = (INDICE * (INDICE + 1)) / 2;
    document.getElementById("resultadoSoma").innerText = `Resultado: ${SOMA}`;
}

function verificarFibonacci() {
    let numero = parseInt(document.getElementById("numeroFibonacci").value);
    let a = 0, b = 1, temp;
    while (b < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }
    let resultado = (b === numero || numero === 0) ? "pertence" : "não pertence";
    document.getElementById("resultadoFibonacci").innerText = `O número ${numero} ${resultado} à sequência de Fibonacci.`;
}

function analisarFaturamento() {
    let file = document.getElementById("fileInput").files[0];
    if (!file) {
        alert("Por favor, selecione um arquivo XML");
        return;
    }
    let reader = new FileReader();
    reader.onload = function(event) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(event.target.result, "text/xml");
        let rows = xmlDoc.getElementsByTagName("row");
        let valores = [];
        for (let row of rows) {
            let valor = parseFloat(row.getElementsByTagName("valor")[0].textContent);
            if (valor > 0) valores.push(valor);
        }
        let menor = Math.min(...valores);
        let maior = Math.max(...valores);
        let media = valores.reduce((a, b) => a + b, 0) / valores.length;
        let acimaDaMedia = valores.filter(v => v > media).length;
        document.getElementById("resultadoFaturamento").innerText = `Menor: ${menor}\nMaior: ${maior}\nDias acima da média: ${acimaDaMedia}`;
    };
    reader.readAsText(file);
}

function calcularPercentual() {
    let estados = {"SP": 67836.43, "RJ": 36678.66, "MG": 29229.88, "ES": 27165.48, "Outros": 19849.53};
    let total = Object.values(estados).reduce((a, b) => a + b, 0);
    let resultado = Object.entries(estados).map(([estado, valor]) => `${estado}: ${(valor / total * 100).toFixed(2)}%`).join("\n");
    document.getElementById("resultadoPercentual").innerText = resultado;
}

function inverterString() {
    let texto = document.getElementById("textoInvertido").value;
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    document.getElementById("resultadoInversao").innerText = `Invertido: ${invertido}`;
}