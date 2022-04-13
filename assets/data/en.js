var config = {};

window.addEventListener('message', function (eventData) {
    console.log("Get the sent data ", eventData);
    const parsedEventData = JSON.parse(eventData.data)
    console.log("received data from parent iframe ", parsedEventData);
    if(parsedEventData.event_code === "custom-child-client-event") {
        console.log("\n\n\n\n\n\n\n HEYYYYYYYYYYYYYYYYYYY \n\n\n\n\n\n\n\n");
        console.log(parsedEventData);
        window.config = parsedEventData.data;
    }
});