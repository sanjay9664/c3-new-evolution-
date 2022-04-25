// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



const srearchMovie = async() => {


    try {

        const query = document.getElementById("boxCenter").value

        const res = await fetch(`https://www.omdbapi.com/?apikey=6a316f9&t=${query}`)

        const data = await res.json()

        console.log("data", data)

    } catch (err) {
        console.log(err)
    }

}