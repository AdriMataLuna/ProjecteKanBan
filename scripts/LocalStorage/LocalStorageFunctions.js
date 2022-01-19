// crearem una classe per ajudarnos a administrar la feina amb el local Storage
export default class LocalStorageKanban {

// primer necesitarem una funció per poder inserir items.
static  insertarItem(idColumna, contingut) {
	const data = llegirItems();
	const columna = data.find(column => column.id == idColumna);
	const item = {
		id: Math.floor(Math.random() * 100000),
		content: contingut
	};

	if (!columna) {
		window.alert("No existeix la columna");
	}

	columna.items.push(item);
	guardarItems(data);

	return item;
}


// tot seguit una funció per obtenir els items.
static obtenirItems(idColumna) {
	const columna = llegirItems().find(column => column.id == idColumna);
	if (!columna) {
		return [];
	}
	return columna.items;
}

// Degut a que en una gran quantitat de tutorials han creat una funció per modificar
// un item per un altre, crearem una també que ens pugui ajudar mes endevant quan volguem aplicar el drag'n'drop

static actualitzaItem(idItem, newData) {
	const data = llegirItems();
	const [item, columnaAct] = (() => {
		for (const column of data) {
			const item = column.items.find(item => item.id == idItem);

			if (item) {
				return [item, column];
			}
		}
	})();

	if (!item) {
		window.alert("No existeix l'item");
	}
	// intentarem obtenir el contingut guardant-lo a newData, afegint-lo a la
	// columna objectiu i modificant la columna i la posició
	item.content = newData.content === undefined ? item.content : newData.content;
	if (
		newData.columnId !== undefined
		&& newData.position !== undefined
	) {
		const targetColumn = data.find(column => column.id == newData.columnId);

		if (!targetColumn) {
			window.alert("No existeix la columna de desti");
		}

		// si tot ha anat correctament eliminarem l'antic item i el mourem a la seva nova posició
		columnaAct.items.splice(columnaAct.items.indexOf(item), 1);
		targetColumn.items.splice(newData.position, 0, item);
	}
	// finalment guardarem tot al LocalStorage
	guardarItems(data);
}

// creem una funció per eliminar els items per referència
static eliminarItem(idItem) {
	const data = llegirItems();

	for (const column of data) {
		const item = column.items.find(item => item.id == idItem);

		if (item) {
			column.items.splice(column.items.indexOf(item), 1);
		}
	}

	guardarItems(data);
}
}

// creem una funció per llegir els items del localStorage
function llegirItems() {
	const json = localStorage.getItem("kanban-local-data");

	if (!json) {
		return [
			{
				id: 1,
				items: []
			},
			{
				id: 2,
				items: []
			},
			{
				id: 3,
				items: []

			}
		];
	}

	return JSON.parse(json);
}

//i practicament la funció mes important, afegim la funció que afegeix les dades realment
// en format .json al localstorage
function guardarItems(data) {
	localStorage.setItem("kanban-local-data", JSON.stringify(data));
}
