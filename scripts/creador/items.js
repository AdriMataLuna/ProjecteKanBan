import zonaDroppable from "./droppableZone.js";
import LocalStorageKanban from "../LocalStorage/LocalStorageFunctions.js";

// crearem la classe item, que sera l'encarregada d'obtenir cada item i tractarlo mitjançant local storage
// amb l'ajut d'un creador/inicialitzador/contructor.
export default class Item {

	constructor(id, content) {
		const bottomDropZone = zonaDroppable.createDroppableZone();

		this.elements = {};
		this.elements.root = Item.creaArrel();
		this.elements.input = this.elements.root.querySelector(".taulell__item-input");

		this.elements.root.dataset.id = id;
		this.elements.input.textContent = content;
		this.content = content;
		this.elements.root.appendChild(bottomDropZone);

		// hem definit que les zones amb blur "distorsió" o "desenfoc"
		// siguin les zones afectades pel drop.
		const onBlur = () => {
			const newContent = this.elements.input.textContent.trim();

			if (newContent == this.content) {
				return;
			}

			this.content = newContent;

			LocalStorageKanban.actualitzaItem(id, {
				content: this.content
			});
		};

		this.elements.input.addEventListener("blur", onBlur);

		this.elements.root.addEventListener("dragstart", e => {
			e.dataTransfer.setData("text/plain", id);
		});

		this.elements.input.addEventListener("drop", e => {
			e.preventDefault();
		});
		
		// també afegirem la funció de modificar la prioritat amb doble click.
		this.elements.root.addEventListener("dblclick", () => {
			
			const check = confirm("Are you sure you want to delete?");

			if (check) {
				LocalStorageKanban.eliminarItem(id);

				this.elements.input.removeEventListener("blur", onBlur);
				this.elements.root.parentElement.removeChild(this.elements.root);
			}
		});

		// també afegirem la funció de modificar la prioritat amb doble click.
		this.elements.root.addEventListener("", () => {
			
		});
}

	// aquest mètode guardarà l'estructura de tot el que conté l'informacio de cada item.
	static creaArrel() {
		const range = document.createRange();

		range.selectNode(document.body);

		return range.createContextualFragment(`
			<div class="taulell__item" draggable="true">
			<div class="taulell__item-input" contenteditable></div>
			<div class="taulell__item-input" contenteditable></div>
			<input type=date></input><input type=date></input>
			<button type="button" onclick="prioritza()" ><i class="fas fa-exclamation-circle"></i></button>
			</div>
		`).children[0];
	}
}
