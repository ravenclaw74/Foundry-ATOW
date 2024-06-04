// Define a set of template paths to pre-load.
//
// Pre-loaded templates are compiled and cached for fast access when rendering
//
export default async function preloadHandlebarsTemplates() {
	const partials = [
		"systems/atow/templates/actor/_shared-partials/header.hbs",
		"systems/atow/templates/actor/character/parts/attribute-table.hbs",
		"systems/atow/templates/actor/character/parts/combat-data.hbs",
		"systems/atow/templates/actor/character/tabs/attributes.hbs",
		"systems/atow/templates/actor/character/tabs/inventory.hbs",
		"systems/atow/templates/actor/character/tabs/personal-data.hbs",
		"systems/atow/templates/actor/character/tabs/skills.hbs",
		"systems/atow/templates/item/_shared-partials/header.hbs",
	];

	const paths = {};

	// For the partial's key, strip off the "systems/<system_name>/templates/"
	// prefix and ".hbs" suffix to keep things more readable in the templates.
	//
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");
		paths[key] = path;
	}

	return loadTemplates(paths);
}
