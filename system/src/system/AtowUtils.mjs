export default class AtowUtils {

	static calculateLinkBonus(value) {
		if (value >= 11) {
			const tmpLink = Math.floor(value / 3);
			return Math.min(5, tmpLink);
		}
		if (value === 10) return 2;
		if (value >= 7 && value <= 9) return 1;
		if (value >= 4 && value <= 6) return 0;
		if (value >= 2 && value <= 3) return -1;
		if (value === 1) return -2;

		return -4;
	}


	static foundryMinVersion(version) {
		const majorVersion = parseInt(game.version.split(".")[0]);
		return majorVersion >= version;
	}


	// If this is a new release or a new world, show the release notes to the
	// GM the first time they login
	//
	static async showNewReleaseNotes() {
		if (game.user.isGM) {
			const savedSystemVersion = game.settings.get(
				SYSTEM_ID, "system_version"
			);

			const systemVersion = game.system.version;

			if (systemVersion !== savedSystemVersion) {
				Hotbar.toggleDocumentSheet(
					CONFIG.ATOW.JOURNAL_UUIDS.releaseNotes
				);

				game.settings.set(
					SYSTEM_ID, "system_version",
					systemVersion
				);
			}
		}
	}

}
