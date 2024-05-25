export default class AtowUtils {

	static foundryMinVersion(version) {
		const majorVersion = parseInt(game.version.split(".")[0]);
		return majorVersion >= version;
	}


	// If this is a new release, show the release notes to the GM the first time
	// they login
	static async showNewReleaseNotes() {
		if (game.user.isGM) {
			const savedVersion = game.settings.get(SYSTEM_ID, "system_version");
			const system_version = game.system.version;

			if (system_version !== savedVersion) {
				Hotbar.toggleDocumentSheet(
					CONFIG.ATOW.JOURNAL_UUIDS.releaseNotes
				);

				game.settings.set(
					SYSTEM_ID, "system_version",
					system_version
				);
			}
		}
	}
}
