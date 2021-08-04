$(document).ready(function() {
    window.onscroll = function() {myFunction()};
      var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
       function myFunction() {
         if (window.pageYOffset >= sticky) {
           navbar.classList.add("sticky")
           } else {
        navbar.classList.remove("sticky");
      }
    }

$(document).ready(function() {
  $("button#wholeOrder").click(function() {

    // alert("yes");
    event.preventDefault();
    // Gets the input of one pizza
    var pizzaOne = function add(pizzaSize, pizzaCrust, pizzaTop,drinks) {
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
      var total = parseInt(pizzaSizing) + parseInt(pizzaCrusting) + parseInt(pizzaTopping);


      function addToQuantity() {
        var pizzaQuantity = $("input#noOfOrders").val();
        var grandTotal = total * parseInt(pizzaQuantity) ;

        $('#form1').submit(function(event){
              event.preventDefault();
        });
  });
});
