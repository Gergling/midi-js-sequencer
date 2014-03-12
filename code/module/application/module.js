qh.setModule("application", {
	app: true,
	require: [
		"indexer",
	],
	controller: [
		"index"
	],
	factory: [
		"navigation"
	],
	config: [
		"index"
	],
});
