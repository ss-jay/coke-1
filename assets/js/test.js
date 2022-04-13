let frameEle = document.getElementById("ymIframe");

let message = JSON.stringify({
    message: 'Hello from iframe',
    date: Date.now(),
});

frameEle.contentWindow.postMessage(message, 'https://ss-jay.github.io/');