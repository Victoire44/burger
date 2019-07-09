$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var burgerName = $("#burger").val().trim()

    if(burgerName !== ""){

      var newBurger = {
        burger_name: burgerName,
        devoured: false
      };
      // Send the POST request.
      $.ajax({
        type: "POST",
        url: "/api/burgers",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(newBurger)
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });

  $(".devourIt").on('click', function (event) {
    event.preventDefault();

    var updatedBurger = {
      devoured: true
    }
    var id = $(event.target).attr("data-id");
    // Send the PUT request
    $.ajax({
      type: "PUT",
      url: "/api/burgers/" + id,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(updatedBurger)
    }).then(
      function () {
        console.log("updated burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });
});


