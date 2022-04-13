parent.postMessage(JSON.stringify({ message: 'Hello from iframe', date: Date.now()}), "*");


// parent.addEventListener('message', function (e) {
//     console.log("test 2 file called --> ", e)
//     console.log("testing 2 ashish case 2 ", e.data);
//     console.log(window.frames);
// });



window.addEventListener('message', function (e) {
    const mainEvent = JSON.parse(e.data);
        console.log("1.1 - test2.js => ",  mainEvent);    
    if (mainEvent && mainEvent.event_code == 'custom-event') {
        console.log("1.2 - test2.js ==> ,", mainEvent.data);
        if (mainEvent.data.code == 'all_lables') {
            document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ message: '----- testing hitesh ---- ', date: mainEvent.data.data }), '*');
        }
    }
//     console.log("======= > ", window);

//     console.log("======= > ", document);

//     document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ message: '----- testing hitesh ---- ', date: e.data }), '*');
});1
