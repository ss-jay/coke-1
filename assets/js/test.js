(function injectJS() {
    try {        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];   
        console.log("iFrameHead -- > ", iFrameHead);      
        // var modularBars = document.createElement('script');
        // modularBars.type = 'text/javascript';
        // modularBars.src = 'https://aporve.github.io/vanCustom/addFrame.js';
        // iFrameHead.appendChild(modularBars);
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.log(eventData);
    try{

        console.error( 'Data----------------->>>',eventData.data);
        if(eventData.data == 'custom-event') {
            console.log("document.getElementById('ymIframe') --> ", document.getElementById('ymIframe'));
        //     document.getElementById('ymIframe').contentWindow.postMessage({
        //         event_code: 'ym-client-event',
        //         data: {
        //             event: {
        //              code: "VEMO",
        //              data: ""
        //             }
        //         }
        //    }, '*');
           return;
        }
    }catch(error){
        console.log(error);
        return;
    }
    
}, false);