import Columna from "./columnes.js";
// crearem una classe per poder inicialitzar cada secció necesària del taulell
export default class Taulell {
	constructor(root) {
		this.root = root;

		Taulell.columnes().forEach(columna => {
			const informacioColumna = new Columna(columna.id, columna.title);

			this.root.appendChild(informacioColumna.elements.root);
		});
	}

	// crearem un mètode que s'anomenarà columnes i tindrà el format de les columnes desitjades.
	static columnes() {
		return [
			{
				id: 1,
				title: "To Do"
			},
			{
				id: 2,
				title: "Doing"
			},
			{
				id: 3,
				title: "Done"
			}
		];
	}
}
