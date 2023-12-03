export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c6a58c58.js","app":"_app/immutable/entry/app.711376dc.js","imports":["_app/immutable/entry/start.c6a58c58.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.ff2ce5b4.js","_app/immutable/entry/app.711376dc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a81567bf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
