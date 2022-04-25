// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function addseat() {

    console.log("someone click me")
    let name = document.getAnimations("name").value

    let seats = document.getElementById("seats").value

    let userBook = document.getElementById("user-detail")

    let div = document.createElement("div")

    div.append(name, seats)

    userBook.append(div)



    // if (userBook < 4) {
    //     alert("Insufficient Balance !")
    // } else {
    //     alert("Booking Successful!")
    // }
}