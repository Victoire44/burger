$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: false
    };
    // Send the POST request.
    $.ajax({
      type: "POST",
      url: "/api/burgers",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(newBurger)
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
