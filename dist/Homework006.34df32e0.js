// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _router = require("./router");
document.addEventListener('DOMContentLoaded', ()=>{
    (0, _router.initRouter)();
});

},{"./router":"4wVP1"}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _layout = require("./layout");
var _about = require("./pages/about");
var _contact = require("./pages/contact");
var _home = require("./pages/home");
var _notfound = require("./pages/notfound");
function initRouter() {
    window.addEventListener('popstate', renderRoute);
    document.addEventListener('click', (e)=>{
        const target = e.target;
        if (target.tagName === 'A' && target.hasAttribute('data-link')) {
            e.preventDefault();
            const href = target.getAttribute('href');
            history.pushState(null, '', href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const pathname = window.location.pathname;
    let contentFn;
    switch(pathname){
        case '/':
            contentFn = (0, _home.renderHome);
            break;
        case '/about':
            contentFn = (0, _about.renderAbout);
            break;
        case '/contact':
            contentFn = (0, _contact.renderContact);
            break;
        default:
            contentFn = (0, _notfound.renderNotFound);
            break;
    }
    (0, _layout.createLayout)(contentFn);
}

},{"./layout":"aUJjy","./pages/about":"d8csY","./pages/contact":"a0XsK","./pages/home":"l0Soh","./pages/notfound":"20OKX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aUJjy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLayout", ()=>createLayout);
var _footer = require("./components/Footer");
var _header = require("./components/Header");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    const header = (0, _header.Header)();
    const content = contentFn();
    const footer = (0, _footer.Footer)();
    app.append(header, content, footer);
}

},{"./components/Footer":"11wJK","./components/Header":"7fu8U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"11wJK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'bg-white dark:bg-gray-800 flex justify-center items-center w-full p-5';
    footer.innerHTML = `
    <div class="bg-white text-gray-700 border-t border-gray-200">
  <div class="container mx-auto px-6 py-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Logo & Description -->
      <div>
        <h2 class="text-xl font-semibold flex items-center space-x-2">
          <span class="text-blue-600 text-2xl">ES</span> <span>BAZAR</span>
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet faucibus malesuada vitae.
        </p>
        <p class="mt-2 text-sm text-gray-600">
          <span class="font-semibold">(219) 555-0114</span>
        </p>
        <!-- Social Icons -->
        <div class="flex space-x-3 mt-3">
          <a href="#" class="text-blue-600"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-red-600"><i class="fab fa-reddit"></i></a>
          <a href="#" class="text-green-500"><i class="fab fa-whatsapp"></i></a>
          <a href="#" class="text-pink-600"><i class="fab fa-pinterest"></i></a>
        </div>
      </div>
      
      <!-- My Account -->
      <div>
        <h3 class="font-semibold mb-2">My Account</h3>
        <ul class="text-sm space-y-2">
          <li><a href="#" class="hover:text-blue-600">My Account</a></li>
          <li><a href="#" class="hover:text-blue-600">Order History</a></li>
          <li><a href="#" class="hover:text-blue-600">Shopping Cart</a></li>
          <li><a href="#" class="hover:text-blue-600">Wishlist</a></li>
        </ul>
      </div>
      
      <!-- Help Section -->
      <div>
        <h3 class="font-semibold mb-2">Helps</h3>
        <ul class="text-sm space-y-2">
          <li><a href="#" class="hover:text-blue-600">Contact</a></li>
          <li><a href="#" class="hover:text-blue-600">FAQs</a></li>
          <li><a href="#" class="hover:text-blue-600">Terms & Condition</a></li>
          <li><a href="#" class="hover:text-blue-600">Privacy Policy</a></li>
        </ul>
      </div>
      
      <!-- Categories -->
      <div>
        <h3 class="font-semibold mb-2">Categories</h3>
        <ul class="text-sm space-y-2">
          <li><a href="#" class="hover:text-blue-600">Printers</a></li>
          <li><a href="#" class="hover:text-blue-600">Cartridge</a></li>
          <li><a href="#" class="hover:text-blue-600">Ink</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Payment and App Download -->
    <div class="flex flex-col md:flex-row justify-between items-center mt-6">
      <div class="flex space-x-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s" alt="Google Play" class="h-10">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s" alt="App Store" class="h-10">
      </div>
      <div class="flex space-x-2 mt-4 md:mt-0">
        <img src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-White-Dark-Background-Logo.wine.svg" alt="Apple Pay" class="h-[30px] w-10 rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynWEtLag--sQ4XlfTwHh9_DAnfcglW7C3iw&s" alt="Visa" class="h-[30px] w-10 rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mJsEDg1aR_JCFb3ohk2nCxjgSvkWnpmlKg&s" alt="Mastercard" class="h-[30px] w-10 rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveKfGcJ1tSEY8bLg52DxvVrFDJXmxXJgv1Q&s" alt="discover" class="h-[30px] w-10 rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS0zyuJdI4e7E1VGaNDAVtRn3fGTzr0PBOA&s" alt="Secure Payment" class="h-[30px] w-10 rounded-md">
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="text-center text-sm text-gray-500 mt-6 border-t pt-4">
      ExpertSquad \xa9 2025. All Rights Reserved.
    </div>
  </div>
</div>
  `;
    return footer;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7fu8U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
function Header() {
    const header = document.createElement('header');
    header.className = 'bg-blue-900 text-white';
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold">Tailwind </a>
                </div>

                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="/service" data-link class="hover:text-gray-300 transition-all">Services</a>
                    <a href="/about" data-link class="hover:text-gray-300 transition-all">About Us</a>
                    <a href="/contact" data-link class="hover:text-gray-300 transition-all">Contact</a>
                </nav>

                <div class="hidden md:block">
                    <a href="#contact" class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
                <a href="/service" class="block text-lg hover:text-gray-300 transition-all">Services</a>
                <a href="/about" class="block text-lg hover:text-gray-300 transition-all">About Us</a>
                <a href="/contact" class="block text-lg hover:text-gray-300 transition-all">Contact</a>
            </div>
        </div>
  `;
    const menuButton = header.querySelector('#menu-button');
    const mobileMenu = header.querySelector('#mobile-menu');
    if (menuButton && mobileMenu) menuButton.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('hidden');
    });
    return header;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d8csY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAbout", ()=>renderAbout);
function renderAbout() {
    const div = document.createElement('div');
    div.innerHTML = `

  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0XsK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContact", ()=>renderContact);
function renderContact() {
    const div = document.createElement('div');
    div.innerHTML = `
    
<section class="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5 text-blue-950">
        <div class="lg:w-1/2 lg:pb-0 pb-10">
          <h2 class="text-[38px] font-bold mb-5">
            Contact <span class="text-[#0074F2] ">Info</span>
          </h2>
          <p class='pb-5 lg:pr-20'>&quot;
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum, fugiat accusantium reiciendis magnam dolorem
            
            &quot;</p>
          <div class="space-y-4">
          
            <div>
              <h4 class="text-lg font-normal">Corporate Office:</h4>

              <address class="flex items-start gap-1 pt-3">
                <IoLocationOutline className='text-blue-500 text-2xl' />
                : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum, fugiat accusantium reiciendis magnam dolorem
            
            &quot;
              </address>
            </div>
            <div>
              <h4 class="text-lg font-medium">Email</h4>
              <p class="flex items-center gap-2  hover:underline">
                <MdOutlineEmail class='text-blue-500' />: example@gmail.com
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium ">Contact</h4>
              <p class="flex items-center gap-2"><FaPhoneAlt className='text-blue-500' />: +91 404******</p>
            </div>
          </div>
        </div>
        <div class='lg:w-1/2 flex flex-col text-blue-950 py-6 rounded-xl pt-16 lg:px-10  md:px-16 px-5 bg-slate-50 lg:pt-7'>
            <h2 class="text-xl font-light text-blue-600 mb-6">
                Have Questions? Contact Our Highway Consultancy Team
            </h2>
            <form class="space-y-2 w-full" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="username"
                        class="block text-gray-600 font-semibold mb-1">
                        Name <span class='text-red-500'>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"       
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="mobile"
                        class="block text-gray-600 font-semibold mb-1">
                        Mobile Number <span class='text-red-500'>*</span>
                    </label>

                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="phone"
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-600 font-semibold mb-1">
                        Email ID <span class='text-red-500'>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="subjects"
                        class="block text-gray-600 font-semibold mb-1">
                        Message
                    </label>
                     <input
                        type="text"
                        id="Message"
                        name="Message"
                        placeholder="Message"       
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                   
                </div>
                <div class='flex justify-center'>
                    <button
                        type="submit"
                        class="py-1 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
      </section>
<section class="">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p class="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p class="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: info@example.com</p>
                            <p class="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0Soh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
function renderHome() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class=" w-full  bg-[#0A2025] py-9 px-8">
      <div class="mx-auto flex  flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-[1440px] bg-no-repeat ">
        <div class="w-[660px]  flex-col justify-center items-start gap-20 inline-flex">
          <div class="self-stretch  flex-col justify-start items-start gap-5 flex">
            <h1 class="self-stretch">
              <span class="text-white text-5xl font-bold font-['Roboto']">Redefining Motion:</span><span class="text-[#3e9d26] text-5xl font-bold font-['Roboto']">The Future of Footwear is Here</span>
            </h1>
            <p class="self-stretch text-white text-xl font-normal font-['Roboto']">Experience unparalleled comfort and
              innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.
            </p>
          </div>
          <div class="justify-start items-center gap-5 inline-flex">
            <div class="justify-start items-center gap-2.5 flex">
              <p class="text-white text-sm font-normal font-['Roboto']">Step into the Future</p>
              <div data-svg-wrapper="true" class="relative"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
                    fill="white"></path>
                </svg></div>
            </div>
            <button class="px-8 py-2.5 bg-[#3e9d26] rounded-[10px] justify-center items-center gap-2.5 flex text-white text-sm font-semibold font-['Roboto']">Shop Now</button>
          </div>
        </div><img class="w-full max-w-[400px]" src="https://iili.io/338c9je.png" alt="">
      </div>
    </section>

    <!-- Services Section -->
    <section class="w-[90%] m-auto mt-10 mb-10 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-laptop-code text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Web Development</h3>
                    <p class="text-gray-600">Custom websites and web applications tailored to your business needs with modern technologies.</p>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-mobile-alt text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Mobile Apps</h3>
                    <p class="text-gray-600">iOS and Android applications designed for optimal performance and user experience.</p>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="text-blue-600 mb-4">
                        <i class="fas fa-cloud text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Cloud Solutions</h3>
                    <p class="text-gray-600">Scalable cloud infrastructure and services to support your growing business needs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="w-[90%] m-auto mt-10 mb-10 p-5">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">About Cyamunara</h2>
                    <p class="text-gray-600 mb-4">Founded in 2015, Cyamunara has been at the forefront of digital transformation, helping businesses of all sizes navigate the complex world of technology.</p>
                    <p class="text-gray-600 mb-6">Our team of experts combines technical expertise with business acumen to deliver solutions that drive real results.</p>
                    <button class="bg-blue-700 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition duration-300">Read Our Story</button>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team working" class="rounded-lg shadow-lg w-full h-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="mt-10 mb-10 bg-blue-700 text-white">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">150+</div>
                    <div class="text-xl">Projects Completed</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">50+</div>
                    <div class="text-xl">Happy Clients</div>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold mb-2">12</div>
                    <div class="text-xl">Awards Won</div>
                </div>
            </div>
        </div>
  </section>
  <section id="testimonies" class="py-20 bg-slate-900">
    <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 class="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    It's not just us.
                </h1>
                <p class="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul class="space-y-8">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 sm:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 lg:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


        </div>
    </div>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"20OKX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderNotFound", ()=>renderNotFound);
function renderNotFound() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div class="text-center animate-fadeIn">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small_2x/404-error-page-not-found-3d-illustration-png.png" alt="404 Illustration" class="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg">
            <h1 class="text-7xl font-extrabold text-blue-700 mt-6">Looks Like You're Lost!</h1>
            <p class="text-xl text-gray-700 mt-2">We can't seem to find the page you're looking for.</p>
            <a href="/" class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700">Return Home</a>
        </div>
    </section>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequire7711", {})

//# sourceMappingURL=Homework006.34df32e0.js.map
