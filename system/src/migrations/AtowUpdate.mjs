/**
 * Base class for World Schema Updates
 *
 * @export
 * @class AtowUpdate
 * @typedef {AtowUpdate}
 */
export class AtowUpdate {

	static version;

	version = this.constructor.version;

	// Update an Actor to this schema version.
	//
	async updateActor(actorData) {}

	// Update an Item to this schema version.
	//
	async updateItem(itemData, actorData) {}

	// And updates required to system settings can be performed here.
	//
	async updateSettings() {}

}
