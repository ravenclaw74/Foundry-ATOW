/**
 * Extend the basic ActorSheet.
 *
 * @extends {ActorSheet}
 */
export default class AtowActorSheet extends ActorSheet {

	_editModeEnabled = false;


	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["atow", "sheet", "actor"],
			width: 600,
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
	activateListeners(html) {
		super.activateListeners(html);

		// if (!this.isEditable) return;

		// TODO Hook up actor conditions to token effects
	}


	/** @override */
	async getData() {
		const context = await super.getData();

		context.editModeEnabled = this._editModeEnabled;

		if (this.actor.type === "character") {
			context.attributes = this._buildAttributeData();
		}

		return context;
	}


	// Prepares Actor attribute information for display in the sheet templates
	//
	_buildAttributeData() {
		const attributeData = [];

		for (const key of Object.keys(CONFIG.ATOW.ATTRIBUTES)) {
			const attribute = this.actor.system.attributes[key];

			attributeData.push({
				key: `system.attributes.${key}.value`,
				label: CONFIG.ATOW.ATTRIBUTES_SHORT[key],
				link: attribute.link,
				tooltip: game.i18n.localize(`ATOW.attribute_tooltips.${key}`),
				value: attribute.value,
				xp: attribute.xp,
			});
		}

		return attributeData;
	}


	/** @override */
	_getHeaderButtons() {
		const buttons = super._getHeaderButtons();

		// Add new Edit/Lock toggle button
		//
		buttons.unshift({
			class: "apply-damage",
			icon: "fa-solid fa-lock toggle-icon",
			label: game.i18n.localize("ATOW.sheet_mode.edit"),
			onclick: this._toggleSheetMode.bind(this),
		});

		return buttons;
	}


	// Handles toggling the Actor sheet between Edit and Locked modes
	//
	async _toggleSheetMode() {
		const currentTarget = event.currentTarget;
		const toggleIcon = currentTarget.querySelector(".toggle-icon");

		this._editModeEnabled = !this._editModeEnabled;

		if (this._editModeEnabled) {
			toggleIcon.classList.replace("fa-pen-to-square", "fa-lock");
			currentTarget.innerHTML = game.i18n.localize("ATOW.sheet_mode.lock");
			currentTarget.insertAdjacentElement("afterbegin", toggleIcon);
		}
		else {
			toggleIcon.classList.replace("fa-lock", "fa-pen-to-square");
			currentTarget.innerText = game.i18n.localize("ATOW.sheet_mode.edit");
			currentTarget.insertAdjacentElement("afterbegin", toggleIcon);
		}

		await this.submit();

		this.render();
	}

}
