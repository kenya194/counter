const value = document.querySelector(".value");
const increment = document.querySelector(".increase");
const decrement = document.querySelector(".decrease");

var current_state = 0;
value.innerHTML = current_state

// function increase_(){
//     current_state++;
//     return value.innerHTML = current_state;
// }

// function decrease_(){
//      current_state--;
//     return value.innerHTML = current_state;
// }

// second procedure or approach
function state(type) {
    if (type === 'increment') {
        current_state++;
        return value.innerHTML = current_state;
    }
    if (type === "decrement") {
        current_state--;
        return value.innerHTML = current_state
    };
}

// adding the click action to the buttons
// using callback function to intiate the action
increment.addEventListener("click", function () {
    let type = 'increment'
    state(type)
})
// Another way to do it
decrement.addEventListener("click", function () {
    state("decrement")
})

console.log("home")