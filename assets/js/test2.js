// parent.postMessage(JSON.stringify({ message: 'Hello from iframe', date: Date.now()}), "*");


// parent.addEventListener('message', function (e) {
//     console.log("test 2 file called --> ", e)
//     console.log("testing 2 ashish case 2 ", e.data);
//     console.log(window.frames);
// });



window.addEventListener('message', function (e) {
    console.log("local test 2 file called --> ", e)
    console.log("local testing 2 ashish case 2 ", e.data);
    console.log("======= > ", window);

    console.log("======= > ", document);
    if(e.event_code === "ym-client-event" && e.data.event.code === "configuration") {
        document.querySelector("iframe").contentWindow.postMessage({
            event_code: 'custom-client-event',
            data: {
                event: {
                    code: "configuration",
                    data: e.data.event.data
                }
            }
        }, '*');
    }
    
});