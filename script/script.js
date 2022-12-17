var medicamentos = [];

function addMedicamentos() {
    event.preventDefault();

    var newMedicamento = {
        "MedNome": document.querySelector("#MedNome").value,
        "QtdDisponivel": document.querySelector("#QtdDisponivel").value,
        "MedClasse": document.querySelector("#MedClasse").value
    }

    medicamentos.push(newMedicamento);
    resetForm();
    renderTable();
}

function renderTable() {
    let table = document.getElementById("Table");
    table.innerHTML =
    `<tr>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe de Medicamento</th>
        <th>Remover</th>
    </tr>`;

    for (let i = 0; i < medicamentos.length; i += 1) {
        table.innerHTML +=
        `<tr>
            <td>${i + 1}</td>
            <td>${medicamentos[i].MedNome}</td>
            <td>${medicamentos[i].QtdDisponivel}</td>
            <td>${medicamentos[i].MedClasse}</td>
            <td><img src="./assets/image 2.png" onclick="removeMedicamentos(${i})"></td>
        </tr>`;
    }
}

function removeMedicamentos(index) {
    medicamentos.splice(index, 1);
    renderTable();
}

function resetForm() {
    document.querySelector("#MedNome").value = "";
    document.querySelector("#QtdDisponivel").value = "";
    document.querySelector("#MedClasse").value = "";
}

renderTable();