export default class LocalStorageKanban {

static obtenirItems(idColumna) {
	const columna = llegirItems().find(column => column.id == idColumna);
	if (!columna) {
		return [];
	}
	return columna.items;
}

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

item.content = newData.content === undefined ? item.content : newData.content;

// Update column and position
if (
	newData.columnId !== undefined
	&& newData.position !== undefined
) {
	const targetColumn = data.find(column => column.id == newData.columnId);

	if (!targetColumn) {
		window.alert("No existeix la columna de desti");
	}

	// Delete the item from it's current column
	columnaAct.items.splice(columnaAct.items.indexOf(item), 1);

	// Move item into it's new column and position
	targetColumn.items.splice(newData.position, 0, item);
}

guardarItems(data);


}


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
			},
		];
	}

	return JSON.parse(json);
}

function guardarItems(data) {
	localStorage.setItem("kanban-local-data", JSON.stringify(data));
}
