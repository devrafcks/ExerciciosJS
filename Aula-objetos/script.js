let aluno = {
    nome: "Rafael",
    idade: 17,
    etec: "Parque Belém",
    rm: 987321,
    curso: "Informática para Internet",
    ano: 2,
    materias: [
		{
            materia: "Matematica",
            notas: ["R", "B", "R", "R", "R"],
            aprovacao: true,
        },
		{
            materia: "Português",
            notas: ["B", "B", "R", "B", "B"],
            aprovacao: true,
        },
		{
            materia: "Biologia",
            notas: ["R", "B", "R", "B", "B"],
            aprovacao: true,
        },
        {
            materia: "IW",
            notas: ["R", "R", "B", "B", "B"],
            aprovacao: true,
        },
        {
            materia: "BD",
            notas: ["R", "B", "B", "MB", "B"],
            aprovacao: true,
        }
    ],
};

var principal = document.querySelector(".principal");

principal.innerHTML = `
	<div class="geralAluno">
		<div class="nomeAluno">
			<p> ${aluno.nome} - ${aluno.curso} </p>
		</div>	
	</div>
	
	<div class="outrosAluno">
		<div class="infoAluno">
			<div> <p> ETEC: </p> ${aluno.etec} </div>
			<div> <p> Ano: </p> ${aluno.ano} </div>
			<div> <p> RM: </p> ${aluno.rm} </div>
		</div>
		
		<div class="boletim">
			<table>
				<tr>
					<th> </th>
					<th> 1° Bimestre </th>
					<th> 2° Bimestre </th>
					<th> 3° Bimestre </th>
					<th> 4° Bimestre </th>
					<th> Nota Final </th>
				</tr>
			</table>
		</div>
	</div>
`;

var materias = aluno.materias;
var notasTabela = document.querySelector("table");

materias.forEach((mencao) => {
	var tabelaTr = document.createElement("tr");
	
	var tabelaTh = document.createElement("th");
	tabelaTh.textContent = `${mencao.materia}`;
	
	var tabelaTd1 = document.createElement("td");
	tabelaTd1.textContent = `${mencao.notas[0]}`;
	
	var tabelaTd2 = document.createElement("td");
	tabelaTd2.textContent = `${mencao.notas[1]}`;
	
	var tabelaTd3 = document.createElement("td");
	tabelaTd3.textContent = `${mencao.notas[2]}`;
	
	var tabelaTd4 = document.createElement("td");
	tabelaTd4.textContent = `${mencao.notas[3]}`;
	
	var tabelaTd5 = document.createElement("td");
	tabelaTd5.textContent = `${mencao.notas[4]}`;
	
	
	tabelaTr.appendChild(tabelaTh);
	tabelaTr.appendChild(tabelaTd1);
	tabelaTr.appendChild(tabelaTd2);
	tabelaTr.appendChild(tabelaTd3);
	tabelaTr.appendChild(tabelaTd4);
	tabelaTr.appendChild(tabelaTd5);
	
	notasTabela.appendChild(tabelaTr);
});
