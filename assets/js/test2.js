parent.postMessage("CLOSE", "*");


window.addEventListener('message', function (e) {
    // Get the sent data
    console.log("testing 2   ", e);

    const data = e.data;
    console.log("testing 2 ashish case 2 ", data);
    // If you encode the message in JSON before sending them,
    // then decode here
    // const decoded = JSON.parse(data);
});