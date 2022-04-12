function apiCall() {
    $.ajax({
        type: "GET", //rest Type
        url: "https://app.yellow.ai/api/data/data/records/0-10?bot=x1649164306069&collection=category_images",
        async: false,
        contentType: "application/json",
        headers: {
            "x-api-key": "odkqIZ7DTSWG5QbCV0fsqp2T8T9ItKBhEWhm3apZ"
        },
        success: function (msg) {
            console.log("Data => ", msg);   
        }
    });
}
