import { AtowUpdate } from "../AtowUpdate.mjs";

/**
 * Dummy migration step to set a baseline World Schema Version
 *
 * @export
 * @class Update_24052401
 * @typedef {Update_24052401}
 * @extends {AtowUpdate}
 */
export default class Update_24052401 extends AtowUpdate {
	static version = 24052401;
}
