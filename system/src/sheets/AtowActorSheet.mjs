/**
 * Extend the basic ActorSheet.
 *
 * @extends {ActorSheet}
 */
export default class AtowActorSheet extends ActorSheet {

	async getData() {
		const context = await super.getData();
		return context;
	}

}
