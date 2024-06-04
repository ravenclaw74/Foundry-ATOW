import AtowMigrationRunner from "../migrations/AtowMigrationRunner.mjs";


export const readyHook = {
	attach: () => {
		atow.logger.debug("Attaching ready hook");

		Hooks.once("ready", async () => {
			atow.logger.debug("Running ready hook");

			// Check to see if the schema needs to be migrated due to an
			// update
			//
			if (game.user.isGM) {
				await new AtowMigrationRunner().run();
			}

			// Show the release notes if necessary
			//
			atow.utils.showNewReleaseNotes();
		});
	},
};
