import LocalStorageKanban from "../LocalStorage/LocalStorageFunctions.js";

// creem una classe per definir quines zones podran tenir drag'n'drop i com funcionaran
export default class zonaDroppable {

	static createDroppableZone() {
		// declarem els items que existeixen per poder adjuntar-los i decidir quins seran objectes i quins zones.
		const range = document.createRange();
		range.selectNode(document.body);

		const dropZone = range.createContextualFragment(`
			<div class="taulell__dropzone"></div>
		`).children[0];

	// l'unica manera de treballar amb zones "droppejables" es mitjançant eventListeners
	// creem el event listener per quan selecciona, quan arrosega, i quan deixa anar l'item
		dropZone.addEventListener("dragover", e => {
			e.preventDefault();
			dropZone.classList.add("taulell__dropzone--active");
		});

		dropZone.addEventListener("dragleave", () => {
			dropZone.classList.remove("taulell__dropzone--active");
		});

		// a l'event de deixar anar l'item haurem d'afegir-li també el tractament de les dades amb el LocalStorage
		dropZone.addEventListener("drop", e => {
			e.preventDefault();
			dropZone.classList.remove("taulell__dropzone--active");

			const columnElement = dropZone.closest(".taulell__column");
			const columnId = Number(columnElement.dataset.id);
			const dropZonesInColumn = Array.from(columnElement.querySelectorAll(".taulell__dropzone"));
			const droppedIndex = dropZonesInColumn.indexOf(dropZone);
			const itemId = Number(e.dataTransfer.getData("text/plain"));
			const droppedItemElement = document.querySelector(`[data-id="${itemId}"]`);
			const insertAfter = dropZone.parentElement.classList.contains("taulell__item") ? dropZone.parentElement : dropZone;

			if (droppedItemElement.contains(dropZone)) {
				return;
			}

			// finalment ho actualitzem al localStorage
			insertAfter.after(droppedItemElement);
			LocalStorageKanban.actualitzaItem(itemId, {
				columnId,
				position: droppedIndex
			});
		});

		return dropZone;
	}
}
