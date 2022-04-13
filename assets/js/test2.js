parent.postMessage(JSON.stringify({ message: 'Hello from iframe', date: Date.now()}), "*");


parent.addEventListener('message', function (e) {
    console.log("test 2 file called --> ", e)
    console.log("testing 2 ashish case 2 ", e.data);
    console.log(window.frames);
});



window.addEventListener('message', function (e) {
    console.log("local test 2 file called --> ", e)
    console.log("local testing 2 ashish case 2 ", e.data);
    console.log("======= > ", window);
});