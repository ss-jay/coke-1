// parent.postMessage("CLOSE", "*");
window.addEventListener('message', function (e) {
    console.log("testing 2   ", e);
    const data = e.data;
    console.log("testing 2 ashish case 2 ", data);
});