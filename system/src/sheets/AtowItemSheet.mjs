/**
 * Extend the basic ActorSheet.
 *
 * @extends {ItemSheet}
 */
export default class AtowItemSheet extends ItemSheet {

	async getData() {
		const context = await super.getData();
		return context;
	}

}
