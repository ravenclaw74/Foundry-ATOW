/**
 * Extend the basic Actor document.
 *
 * @extends {Actor}
 */
export default class AtowActor extends Actor {

	/** @inheritDoc */
	prepareData() {
		super.prepareData();
	}

	/**
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).
	 *
     * @inheritDoc
     */
	prepareDerivedData() {
		if (this.type === "character") this._prepareCharacterData();
		if (this.type === "npc") this._prepareNpcData();
		if (this.type === "vehicle") this._prepareVehicleData();
	}

	_prepareCharacterData() {

		for (const key of Object.keys(this.system.attributes)) {
			const attribute = this.system.attributes[key];

			if (attribute.value >= 11) {
				const tmpLink = Math.floor(attribute.value / 3);
				attribute.link = Math.min(5, tmpLink);
			}
			else if (attribute.value === 10) {
				attribute.link = 2;
			}
			else if (attribute.value >= 7 && attribute.value <= 9) {
				attribute.link = 1;
			}
			else if (attribute.value >= 4 && attribute.value <= 6) {
				attribute.link = 0;
			}
			else if (attribute.value >= 2 && attribute.value <= 3) {
				attribute.link = -1;
			}
			else if (attribute.value === 1) {
				attribute.link = -2;
			}
			else {
				attribute.link = -4;
			}
		}
	}

	_prepareNpcData() {}

	_prepareVehicleData() {}
}
