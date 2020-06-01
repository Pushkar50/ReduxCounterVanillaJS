import "./styles.css";

//Reducer
function reducer(currentState, action) {
  var nextState = {
    count: currentState.count
  };
  switch (action.type) {
    case "ADD":
      nextState.count = currentState.count + 1;
      return nextState;
    case "MINUS":
      nextState.count = currentState.count === 0 ? 0 : currentState.count - 1;
      return nextState;
    case "RESET":
      nextState.count = 0;
      return nextState;
    default:
      return currentState;
  }
}

var state = { count: 0 };
var store = Redux.createStore(reducer, state);
var counterElement = document.getElementById("counter");
store.subscribe(render);

function render() {
  var state = store.getState();

  counterElement.innerText = state.count;
}

document.querySelector("#add").addEventListener("click", () => {
  store.dispatch({ type: "ADD" });
});

document.querySelector("#minus").addEventListener("click", () => {
  store.dispatch({ type: "MINUS" });
});

document.querySelector("#reset").addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});
