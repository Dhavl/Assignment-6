$(document).ready(function fetchGameResult() {

    $(document).on("click", ":submit", function(event) {
        //alert($(this).val());
        if ($(this).val() != " ") {
            $("#Form").attr("action", "/play/" + $(this).val());
            $("#Form").submit();
        }
    });
    $.ajax({
        url: "/outcome",
        dataType: "json",
        success: function(data) {
          
            $("#outcome").empty();
            $("#outcome").append("<h3> Outcome: " + data.outcome + "</h3>");
            $("#outcome").append("<h4>Wins:" + data.wins + " &nbsp;&nbsp;  Losses:" +
                data.losses + "&nbsp;&nbsp;  Ties:" + data.ties + "</h4>");
        },
        type: "POST"
    });
});
