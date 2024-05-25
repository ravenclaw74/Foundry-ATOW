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

	_prepareCharacterData() {}

	_prepareNpcData() {}

	_prepareVehicleData() {}
}
