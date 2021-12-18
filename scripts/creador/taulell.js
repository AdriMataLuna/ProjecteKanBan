import Columna from "./columnes.js";

export default class Taulell {
	constructor(root) {
		this.root = root;

		Taulell.columnes().forEach(columna => {
			const informacioColumna = new Columna(columna.id, columna.title);

			this.root.appendChild(informacioColumna.elements.root);
		});
	}

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
