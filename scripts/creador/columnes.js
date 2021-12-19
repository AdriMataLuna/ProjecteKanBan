import LocalStorageKanban from "../LocalStorage/LocalStorageFunctions.js";
import zonaDroppable from "./droppableZone.js";
import Item from "./items.js";

// crearem també la clase que crea cada columna inserint el codi html i definint les zones habilitades
// per als drops i per ser "draggable"
export default class Columna {
	constructor(id, title) {
		const topDropZone = zonaDroppable.createDroppableZone();

		this.elements = {};
		this.elements.root = Columna.creaArrel();
		this.elements.title = this.elements.root.querySelector(".taulell__column-title");
		this.elements.items = this.elements.root.querySelector(".taulell__column-items");
		this.elements.addItem = this.elements.root.querySelector(".taulell__add-item");

		this.elements.root.dataset.id = id;
		this.elements.title.textContent = title;
		this.elements.items.appendChild(topDropZone);

		this.elements.addItem.addEventListener("click", () => {
			const newItem = LocalStorageKanban.insertarItem(id, "");

			this.printaItem(newItem);
		});

		LocalStorageKanban.obtenirItems(id).forEach(item => {
			this.printaItem(item);
		});
	}

	// crearem un mètode que contindrà l'html que necesitem, i colocar-lo on sigui necesari.
	static creaArrel() {
		const range = document.createRange();

		range.selectNode(document.body);

		return range.createContextualFragment(`
			<div class="taulell__column">
				<div class="taulell__column-title"></div>
				<div class="taulell__column-items"></div>
				<button class="taulell__add-item" type="button"><i class="fas fa-plus-circle"></i></button>
			</div>
		`).children[0];
	}

	// una funció per printar els items
	printaItem(data) {
		const item = new Item(data.id, data.content);

		this.elements.items.appendChild(item.elements.root);
	}
}
