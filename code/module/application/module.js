qh.setModule("application", {
	app: true,
	require: [
		"collection",
		"sequencer",
	],
	controller: [
		"index"
	],
	factory: [
		"navigation",
		"uid",
	],
	config: [
		"index"
	],
});
