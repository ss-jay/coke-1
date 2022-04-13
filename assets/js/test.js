let frameEle = document.getElementById("1649832296909");
console.log("fram ele ", frameEle)

let message = JSON.stringify({
    message: 'Hello from iframe',
    date: Date.now(),
});

frameEle.contentWindow.postMessage(message, '*');