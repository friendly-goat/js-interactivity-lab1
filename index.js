// console.log("Connected")

const addMovie = (e) => {
    e.preventDefault()
    //document object model
    //querySelector is method
    let inputField = document.querySelector("input")

    //creating 2 new vars sent to mem. in DOM
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")

    //movieTitle is obj, textContent is key
    movieTitle.textContent = inputField.value

    // for cross off
    movieTitle.addEventListener('click',crossOff)

    //puts span inside li (parent/child)
    movie.appendChild(movieTitle)

    //new
    let deleteBtn = document.createElement("deleteBtn")
    deleteBtn.textContent = 'X'
    //event listener
    deleteBtn.addEventListener('click',deleteMovie)
    //appendChild to add deleteBtn onto movie
    movie.appendChild(deleteBtn)

    //chaining methods, dont have to make it a var
    document.querySelector("ul").appendChild(movie)

    inputField.value = ""
}

// can be chained like this
// document.querySelector("form").addEventListener('submit',addMovie)

//targets form in HTML
let add = document.querySelector('form')
//no paramater on addMovie because we want to controll it
add.addEventListener('submit',addMovie)


//new
const deleteMovie = (ev) => {
    ev.target.parentNode.remove() 
}
const crossOff = (ev) => {
    ev.target.classList.toggle("checked")
    if(ev.target.classList.contains('checked')){

    }
}