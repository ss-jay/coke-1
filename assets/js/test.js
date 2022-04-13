
// (function () {
//     setTimeout(() => {
//       console.log("This is test.js file");
//       window.addEventListener('message', function (eventData) {
//         console.log("CHECKING FOR EVENT : TEST");
//         console.log(eventData);
//         try {
//             const mainEvent = JSON.parse(eventData.data);
//             console.log("1.1 Main event => ", mainEvent);
//             console.log("1.1 Main event -> event_code => ", mainEvent.event_code);
//             console.log("1.1 Main event -> event_code -> data  => ", mainEvent.data);
//             console.log("1.1.1 Main event -> event_code -> data -> code  => ", mainEvent.data.code);
//             console.log("1.1.2 Main event -> event_code -> data -> data  => ", mainEvent.data.data);
//             if (mainEvent && mainEvent.event_code == 'custom-event') {
//                 console.log("In if loop");
//                 let event = JSON.parse(eventData.data);
//                 console.log("1.2 ", event.data.data);
//                 if (mainEvent.data.code == 'all_lables') {
//                     config = mainEvent.data.data;
//                     console.log("this is config obj", config);
//                     console.log("this is config products", config.products);
//                     parent.window.config = config;
//                     const bodyContent = document.getElementById('bodyCasontent');
//                     console.log('This is bodyContent in test.js file', bodyContent);
                   
// //                     let myiframe = window.frames['ymIframe'].document.getElementById('webviewId');
// //                     myiframe.contentWindow.postMessage(JSON.stringify({
// //                         event_code: 'all_labels', data: JSON.stringify({
// //                             event: {
// //                                 code: "all_labels",
// //                                 data: mainEvent.data.data
// //                             }
// //                         })
// //                     }), '*');
//                 }
//                 console.log("AFTER :: page is loading");
//             }

//         } catch (error) {
//             return;
//         }
//       }, false);
        
        
//     }, 0);
// })();


var frame = document.getElementById("mainframe");
console.log("1 frame => " , frame);
frame = frame ? frame.contentWindow : null;
console.log("2 frame => " , frame)
console.log("3 frame.contentWindow => " , frame.contentWindow)

      /*
      * RECEIVE MESSAGE FROM CHILD
      */
  window.addEventListener("message", (e) => {
        var data = e.data;
        console.log(" Event data ===> ", e);
      console.log(" JSON parse Event data ===> ", JSON.parse(e));
        if(data === "shakehand") {
          console.log("SHAKEHAND RECEIVED FROM CHILD")
          frame.postMessage("HARE AND NOW THIS TEXT IS BEING SENT TO CHILD", "*");
        }
  });
