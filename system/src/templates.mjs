
/**
 * Define a set of template paths to pre-load.
 *
 * Pre-loaded templates are compiled and cached for fast access when rendering
 *
 * @export
 * @async
 * @returns {Promise}
 */
export default async function preloadHandlebarsTemplates() {
	const partials = [
		"systems/atow/templates/actor/_shared-partials/header.hbs",
		"systems/atow/templates/actor/character/parts/attribute-table.hbs",
		"systems/atow/templates/actor/character/tabs/attributes.hbs",
		"systems/atow/templates/actor/character/tabs/inventory.hbs",
		"systems/atow/templates/actor/character/tabs/skills.hbs",
		"systems/atow/templates/item/_shared-partials/header.hbs",
	];

	const paths = {};
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");
		paths[key] = path;
	}

	return loadTemplates(paths);
}
