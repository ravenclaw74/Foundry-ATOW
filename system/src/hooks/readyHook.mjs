import AtowMigrationRunner from "../migrations/AtowMigrationRunner.mjs";

export const readyHook = {
	attach: () => {
		atow.logger.debug("Attaching ready hook");

		Hooks.once("ready", async () => {
			atow.logger.debug("Running ready hook");

			if (game.user.isGM) {
				await new AtowMigrationRunner().run();
			}

			atow.utils.showNewReleaseNotes();
		});
	},
};
