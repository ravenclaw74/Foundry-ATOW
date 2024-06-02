/**
 * Extend the basic ActorSheet.
 *
 * @extends {ItemSheet}
 */
export default class AtowItemSheet extends ItemSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["atow", "sheet", "item"],
			width: 400,
			height: 560,
			// tabs: [{
			// 	contentSelector: ".sheet-body",
			// 	initial: "abilities",
			// 	navSelector: ".sheet-tabs",
			// }],
		});
	}


	/** @override */
	get template() {
		return `systems/atow/templates/item/${this.item.type}-sheet.hbs`;
	}


	/** @override */
	get title() {
		const type = game.i18n.localize(`TYPES.Item.${this.item.type}`);
		return `[${type}] ${this.item.name}`;
	}


	async getData() {
		const context = await super.getData();

		// prepare data for display on sheet here

		return context;
	}

}
