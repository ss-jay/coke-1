
(function () {
    setTimeout(() => {
      console.log("This is custom.js file");
      window.addEventListener('message', function (eventData) {
        console.log("CHECKING FOR EVENT : Custom");
        console.log(eventData);
        try {
            const mainEvent = JSON.parse(eventData.data);
            console.log("1.1 Main event => ", mainEvent);
            console.log("1.1 Main event -> event_code => ", mainEvent.event_code);
            console.log("1.1 Main event -> event_code -> data  => ", mainEvent.data);
            console.log("1.1.1 Main event -> event_code -> data -> code  => ", mainEvent.data.code);
            console.log("1.1.2 Main event -> event_code -> data -> data  => ", mainEvent.data.data);
            if (mainEvent && mainEvent.event_code == 'custom-event') {
                console.log("In if loop");
                let event = JSON.parse(eventData.data);
                console.log("1.2 ", event.data.data);
                if (mainEvent.data.code == 'all_lables') {
                    config = mainEvent.data.data;
                    console.log("this is config obj", config);
                    console.log("this is config products", config.products);
                    window.config = config;
                }
                console.log("AFTER :: page is loading");
            }

        } catch (error) {
            return;
        }
      }, false);
        
        
    }, 0);
})();
