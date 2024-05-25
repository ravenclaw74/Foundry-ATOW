import { setupHook } from "../hooks/setupHook.mjs";
import { readyHook } from "../hooks/readyHook.mjs";

export const AtowHooks = {
	attach: () => {
		atow.logger.debug("Attaching hooks");

		const listeners = [
			readyHook,
			setupHook,
		];

		for (const listener of listeners) {
			listener.attach();
		}
	},
};
