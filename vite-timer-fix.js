/* 
  Timer compatibility shim for StackBlitz WebContainer
  -----------------------------------------------
  WebContainer's setTimeout returns a numeric ID (DOM-style).  
  Some Node polyfills inside builtins.*.js expect a Node-style
  Timeout object with an <code>_onTimeout</code> function.
  This wrapper returns an object that satisfies that shape.
  It ONLY affects the dev server process and keeps normal
  functionality intact.
*/
(function patchTimers() {
  const nativeSetTimeout = globalThis.setTimeout;
  const nativeClearTimeout = globalThis.clearTimeout;

  function wrapHandle(id, fn) {
    // Create a minimal Node-like timer object
    return {
      _id: id,
      _onTimeout: typeof fn === 'function' ? fn : () => {},
      ref() { /* no-op */ },
      unref() { /* no-op */ }
    };
  }

  // Override setTimeout
  globalThis.setTimeout = function (fn, delay, ...args) {
    const id = nativeSetTimeout(fn, delay, ...args);
    // WebContainer gives us a number – wrap it
    if (typeof id === 'number') {
      return wrapHandle(id, fn);
    }
    return id; // Already looks like a Node timer
  };

  // Override clearTimeout to work with our wrapped handles
  globalThis.clearTimeout = function (handle) {
    if (handle && typeof handle._id === 'number') {
      nativeClearTimeout(handle._id);
    } else {
      nativeClearTimeout(handle);
    }
  };
})();
