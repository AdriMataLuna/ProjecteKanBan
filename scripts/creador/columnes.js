import LocalStorageKanban from "../LocalStorage/LocalStorageFunctions.js";
import zonaDroppable from "./droppableZone.js";
import Item from "./items.js";

export default class Columna {
	constructor(id, title) {
		const topDropZone = zonaDroppable.createDroppableZone();

		this.elements = {};
		this.elements.root = Columna.createRoot();
		this.elements.title = this.elements.root.querySelector(".taulell__column-title");
		this.elements.items = this.elements.root.querySelector(".taulell__column-items");
		this.elements.addItem = this.elements.root.querySelector(".taulell__add-item");

		this.elements.root.dataset.id = id;
		this.elements.title.textContent = title;
		this.elements.items.appendChild(topDropZone);

		this.elements.addItem.addEventListener("click", () => {
			const newItem = LocalStorageKanban.insertarItem(id, "");

			this.renderItem(newItem);
		});

		LocalStorageKanban.obtenirItems(id).forEach(item => {
			this.renderItem(item);
		});
	}

	static createRoot() {
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

	renderItem(data) {
		const item = new Item(data.id, data.content);

		this.elements.items.appendChild(item.elements.root);
	}
}
