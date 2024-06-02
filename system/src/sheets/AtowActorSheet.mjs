/**
 * Extend the basic ActorSheet.
 *
 * @extends {ActorSheet}
 */
export default class AtowActorSheet extends ActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["atow", "sheet", "actor"],
			width: 500,
			height: 700,
			tabs: [
				{
					navSelector: ".sheet-navigation",
					contentSelector: ".sheet-content",
					initial: "attributes",
				},
			],
		});
	}


	/** @override */
	get template() {
		return `systems/atow/templates/actor/${this.actor.type}-sheet.hbs`;
	}


	/** @override */
	get title() {
		const type = game.i18n.localize(`TYPES.Actor.${this.actor.type}`);
		return `[${type}] ${this.actor.name}`;
	}


	/** @override */
	async getData() {
		const context = await super.getData();

		if (this.actor.type === "character") {
			context.attributes = this._buildAttributeData();
		}

		return context;
	}

	_buildAttributeData() {
		const attributeData = [];

		for (const key of Object.keys(CONFIG.ATOW.ATTRIBUTES)) {
			const attribute = this.actor.system.attributes[key];

			attributeData.push({
				key: `system.attributes.${key}.value`,
				label: CONFIG.ATOW.ATTRIBUTES_SHORT[key],
				link: attribute.link,
				tooltip: game.i18n.localize(`ATOW.attribute_tooltips.${key}`),
				value: attribute.value ?? 1,
				xp: attribute.value * 100,
			});
		}

		return attributeData;
	}
}
