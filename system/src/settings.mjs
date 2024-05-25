export default function registerSystemSettings() {
	// ----------------
	//  DEBUG SETTINGS
	// ----------------
	//
	game.settings.register(SYSTEM_ID, "debug_enabled", {
		name: game.i18n.localize("ATOW.settings.debug_enabled.label"),
		hint: game.i18n.localize("ATOW.settings.debug_enabled.hint"),
		scope: "world",
		type: Boolean,
		config: true,
		default: false,
		requiresReload: true,
	});

	game.settings.register(SYSTEM_ID, "world_schema_version", {
		name: game.i18n.localize("ATOW.settings.world_schema_version.label"),
		hint: game.i18n.localize("ATOW.settings.world_schema_version.hint"),
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debug_enabled"),
		default: -1,
		type: Number,
	});

	game.settings.register(SYSTEM_ID, "system_version", {
		name: game.i18n.localize("ATOW.settings.system_version.label"),
		hint: game.i18n.localize("ATOW.settings.system_version.hint"),
		scope: "world",
		config: game.settings.get(SYSTEM_ID, "debug_enabled"),
		default: "",
		type: String,
	});

	game.settings.register(SYSTEM_ID, "migrate_system_compendiums", {
		name: game.i18n.localize("ATOW.settings.migrate_system_compendiums.label"),
		hint: game.i18n.localize("ATOW.settings.migrate_system_compendiums.hint"),
		scope: "world",
		type: Boolean,
		config: game.settings.get(SYSTEM_ID, "debug_enabled"),
		default: false,
		requiresReload: true,
	});
}
