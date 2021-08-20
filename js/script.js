$(document).ready(function() {
  $("button#wholeOrder").click(function() {

    event.preventDefault();
    var pizzaOne = function add(pizzaSize, pizzaCrust, pizzaTop) {
      var pizzaSizing = $("#inputGroupSelect01 option:selected").val();
      var pizzaCrusting = $("#inputGroupSelect2 option:selected").val();
      var pizzaTopping = $("#inputGroupSelect03 option:selected").val();
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
      pizzaPrice = 0;
          break;
        case "2":
        pizzaPrice = 150;
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
      }


        var total = parseInt(pizzaSizing) + parseInt(pizzaCrusting) + parseInt(pizzaTopping) ;
        var pizzaQuantity = $("input#noOfOrders").val();
        var grandTotal = total * parseInt(pizzaQuantity);

        $(".total").append(grandTotal);
      }

      $("#submitbutton").click(function(event);
       event.preventDefault();
       let inputtedFirstName = $("input#name").val();
       let inputtedContacts = $("input#contacts").val();
       let inputtedlocation = $("input#location").val();
      });

      if ($("inputtedFirstName#name").val() && $("input#contacts").val() && $("input#location").val());

         alert(" Your order will be delivered to"  + inputed location);
       else

     }};
    });
    });
