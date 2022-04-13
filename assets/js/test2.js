parent.postMessage(JSON.stringify({ message: 'Hello from iframe', date: Date.now()}), "*");


parent.addEventListener('message', function (e) {
    console.log("test 2 file called --> ", e)
    console.log("testing 2 ashish case 2 ", e.data);
    console.log(window.frames);
});



window.addEventListener('message', function (e) {
    console.log("1.1 => ", e.data);
//     console.log("======= > ", window);

//     console.log("======= > ", document);

    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ message: '----- testing hitesh ---- ', date: e.data }), '*');
});
