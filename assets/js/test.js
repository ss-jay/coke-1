(function injectJS() {
    try {
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
        console.log("iFrameHead -- > ", iFrameHead);
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://ss-jay.github.io/coke/assets/js/test2.js';
        iFrameHead.appendChild(modularBars);
    } catch (e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


window.addEventListener('message', function (eventData) {
    console.log("test js file called");
    try {
        console.table('Data----------------->>>', eventData.data);
        if (eventData?.event_code == 'custom-event' && eventData?.data?.code == "all_lables") {
            console.log("document.getElementById('ymIframe') --> ", document.getElementById('ymIframe'));
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                        code: "configuration",
                        data: eventData.data.data
                    }
                }
            }, '*');
            return;
        }
    } catch (error) {
        console.log(error);
        return;
    }
}, false);