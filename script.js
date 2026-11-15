
// Calculate the total cinema ticket price

function calculatePrice() {

    // Get the number of tickets
    let adult = Number(document.getElementById("adult").value);
    let child = Number(document.getElementById("child").value);

    // Set ticket prices
    let adultPrice = 20;
    let childPrice = 12;

    // Calculate the total price
    let total = (adult * adultPrice) + (child * childPrice);

    // Display the result
    document.getElementById("result").innerHTML =
        "Total Price: $" + total.toFixed(2);
}
