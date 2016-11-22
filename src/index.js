$("#check-stock-button").on('click', function() {
    var ticker = $("#ticker").val();
    $.ajax({
        url: "/stock",
        data: {
            ticker: ticker
        },
        success: function(data) {
            $("#results-paragraph").text(JSON.stringify(data));
        }
    })
});