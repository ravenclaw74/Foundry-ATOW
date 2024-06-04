/**
 * Extend the basic Actor document.
 *
 * @extends {Actor}
 */
export default class AtowActor extends Actor {

	attributeXp = 0; // Total XP cost of this Actor's Attributes


	// Augment the basic actor data with additional dynamic data. Typically,
	// you'll want to handle most of your calculated/derived data in this step.
	//
	prepareDerivedData() {
		if (this.type === "character") this._prepareCharacterData();
		if (this.type === "npc") this._prepareNpcData();
		if (this.type === "vehicle") this._prepareVehicleData();
	}


	// Prepare any additional data required for Character Actors
	//
	_prepareCharacterData() {
		this._calculateAttributeExtras();
		this._calculateHealthMaximums();
		this._calculateMovementValues();
	}


	// Goes through all character attributes and calculates the link and XP
	// costs so they can be used and displayed on the character sheet
	//
	_calculateAttributeExtras() {
		for (const key of Object.keys(this.system.attributes)) {
			const attribute = this.system.attributes[key];

			attribute.link = atow.utils.calculateLinkBonus(attribute.value);

			attribute.xp = attribute.value * 100;

			// Store the total attribute XP for use in later calculations
			//
			this.attributeXp += attribute.xp;
		}
	}


	_calculateHealthMaximums() {
		this.system.damage.standard.max = this.system.attributes.bod.value * 2;
		this.system.damage.fatigue.max = this.system.attributes.wil.value * 2;
	}


	_calculateMovementValues() {
		const attributes = this.system.attributes;

		const walk = attributes.str.value + attributes.rfl.value;
		const run = 10 + walk; // TODO Add Running skill level
		const sprint = run * 2;

		const climb = Math.ceil(walk / 2); // TODO Add Climbing skill level
		const crawl = Math.ceil(walk / 4);
		const swim = walk; // TODO Add Swimming skill level

		this.system.movement.climb = climb;
		this.system.movement.crawl = crawl;
		this.system.movement.run = run;
		this.system.movement.sprint = sprint;
		this.system.movement.swim = swim;
		this.system.movement.walk = walk;
	}


	// Prepare any additional data required for NPC Actors
	//
	_prepareNpcData() {}


	// Prepare any additional data required for Vehicle Actors
	//
	_prepareVehicleData() {}

}
