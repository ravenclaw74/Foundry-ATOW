export const setupHook = {
	attach: () => {
		atow.logger.debug("Attaching setup hook");

		Hooks.once("setup", () => {
			atow.logger.debug("Running setup hook");

			// Go through the CONFIG object and attempt to localize any Strings
			// up front
			for (const obj in CONFIG.ATOW) {
				if ({}.hasOwnProperty.call(CONFIG.ATOW, obj)) {
					for (const el in CONFIG.ATOW[obj]) {
						if ({}.hasOwnProperty.call(CONFIG.ATOW[obj], el)) {
							if (typeof CONFIG.ATOW[obj][el] === "string") {
								CONFIG.ATOW[obj][el] = game.i18n.localize(
									CONFIG.ATOW[obj][el]
								);
							}
						}
					}
				}
			}
		});
	},
};
