$(document).ready(function() {
  $("button#wholeOrder").click(function() {

    // alert("yes");
    event.preventDefault();
    // Gets the input of one pizza
    var pizzaOne = function add(pizzaSize, pizzaCrust, pizzaTop,drinks) {
      var pizzaSizing = $("#inputGroupSelect01 option:selected").val();
      var pizzaCrusting = $("#inputGroupSelect2 option:selected").val();
      var pizzaTopping = $("#inputGroupSelect03 option:selected").val();
      var drinks = $("#inputGroupSelect04 option:selected").val();
      var pizzaPrice = 0;

      switch (pizzaSizing) {
        case "1":
          pizzaPrice = 450;
          break;
        case "2":
          pizzaPrice = 650;
          break;
        case "3":
          pizzaPrice = 850;
          break;
        default:
          pizzaPrice;
          break;
      }

      switch (pizzaCrusting) {
        case "1":
          pizzaPrice = 150;
          break;

        case "2":
          pizzaPrice = 50;
          break;

          default:
          pizzaPrice;
          break;
      }

      switch (pizzaTopping) {
        case "1":
          pizzaPrice = 150;
          break;

        case "2":
          pizzaPrice = 100;
          break;

        case "3":
          pizzaPrice = 150;
          break;

        default:
          pizzaPrice;
          break;
      }

      switch (drinks) {
        case "1":
          pizzaPrice = 80;
          break;

        case "2":
          pizzaPrice = 100;
          break;

        case "3":
          pizzaPrice = 120;
          break;

        case "4":
          pizzaPrice = 150;
          break;

        case "5":
          pizzaPrice = 250;
          break;

        default:
          pizzaPrice;
          break;
      }


      var total = parseInt(pizzaSizing) + parseInt(pizzaCrusting) + parseInt(pizzaTopping) + parseInt(drinks);


      function addToQuantity() {
        var pizzaQuantity = $("input#noOfOrders").val();
        var grandTotal = total * parseInt(pizzaQuantity);

        $(".total").append(grandTotal);
      }
      addToQuantity();
    }
    pizzaOne();
    $("#deliverPizza").show();
  });
  $("#deliverPizza").click(function() {
    $("#contactform").slideDown();
  });
  $("#submitbutton").click(function(event) {
  });
});
