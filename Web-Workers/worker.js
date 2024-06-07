/** 
 * Web workers have no access to the DOM (document object, parent object, window object), so they can't manipulate the DOM directly.
 * However, they have access to the navigator object, the location object, XMLHttpRequest, setTimeout, clearTimeout, setInterval, clearInterval, and the Application Cache.
 * We can spawn another worker from a worker, but we can't spawn a worker from a worker that was spawned from a worker.
 * We can terminate a worker using the terminate() method.
 */
this.onmessage = function(e) {
    if (e.data.addThis !== undefined) {
        this.postMessage({result: e.data.addThis.num1 + e.data.addThis.num2});
    }
}
