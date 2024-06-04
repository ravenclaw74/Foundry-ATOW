import { ATOW, SYSTEM_ID, SYSTEM_NAME } from "../config.mjs";

import * as documents from "../documents/_module.mjs";
import * as sheets from "../sheets/_module.mjs";

import { AtowHooks } from "../system/AtowHooks.mjs";
import AtowUtils from "../system/AtowUtils.mjs";
import Logger from "../system/Logger.mjs";

import preloadHandlebarsTemplates from "../templates.mjs";
import registerHandlebarsHelpers from "../handlebars.mjs";
import registerSystemSettings from "../settings.mjs";


export async function initHook() {
	console.debug(`${SYSTEM_NAME} | Running init hook`);

	CONFIG.ATOW = ATOW;

	globalThis.SYSTEM_ID = SYSTEM_ID;
	globalThis.SYSTEM_NAME = SYSTEM_NAME;

	globalThis.atow = {
		logger: Logger,
		utils: AtowUtils,
	};

	registerSystemSettings();

	registerDocumentClasses();
	registerDocumentSheets();

	registerHandlebarsHelpers();

	preloadHandlebarsTemplates();

	AtowHooks.attach();
}


function registerDocumentClasses() {
	CONFIG.Actor.documentClass = documents.AtowActor;
	CONFIG.Item.documentClass = documents.AtowItem;
}


function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(
		SYSTEM_ID,
		sheets.AtowActorSheet,
		{
			makeDefault: true,
			types: ["character", "npc", "vehicle"],
		}
	);

	Items.registerSheet(SYSTEM_ID, sheets.AtowItemSheet, { makeDefault: true });
}
