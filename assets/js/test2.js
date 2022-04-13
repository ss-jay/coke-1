parent.postMessage(JSON.stringify({ message: 'Hello from iframe', date: Date.now()}), "*");


// parent.addEventListener('message', function (e) {
//     console.log("test 2 file called --> ", e)
//     console.log("testing 2 ashish case 2 ", e.data);
//     console.log(window.frames);
// });



window.addEventListener('message', function (e) {
    const mainEvent = JSON.parse(e.data);
        console.log("1.1 - test2.js => ",  mainEvent);
        console.log("1.1 - test2.js - message 1 => ",  mainEvent.message);
        console.log("1.1 - test2.js => message 3 => ",   mainEvent.message.event_code);
        console.log("1.1 - test2.js => message 4 => ",   mainEvent.message.data.data);
        console.log("1.1 - test2.js => message 5 => ",   mainEvent.message.data.code);

    if (mainEvent && mainEvent.message.event_code == 'custom-event') {
        console.log("1.2 - test2.js ==> ,", mainEvent.message);
        if (mainEvent.message.data.code == 'all_lables') {
            window.config = mainEvent.message.data.data;
            document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ message: '----- testing hitesh ---- ', date: mainEvent.message.data.data }), '*');
        }
    }
    console.log("value of window before accessing it", window['0'].config);
    window.config = window['0'].config;
    console.log("This is windo.config objec => ", window.config);
//     console.log("======= > ", window);

//     console.log("======= > ", document);

//     document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ message: '----- testing hitesh ---- ', date: e.data }), '*');
});1
