export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.a0938ace.js","app":"_app/immutable/entry/app.926e7b42.js","imports":["_app/immutable/entry/start.a0938ace.js","_app/immutable/chunks/index.e336a388.js","_app/immutable/chunks/singletons.f6bb125a.js","_app/immutable/entry/app.926e7b42.js","_app/immutable/chunks/index.e336a388.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
