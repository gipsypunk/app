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
		client: {"start":"_app/immutable/entry/start.e24cbe05.js","app":"_app/immutable/entry/app.6048ba49.js","imports":["_app/immutable/entry/start.e24cbe05.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/singletons.1e63d3bb.js","_app/immutable/entry/app.6048ba49.js","_app/immutable/chunks/scheduler.22fe7610.js","_app/immutable/chunks/index.1cc7bd69.js"],"stylesheets":[],"fonts":[]},
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
