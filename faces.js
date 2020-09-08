window.onload = function () {
  store.subscribe(() => {
    console.log("subscribe invoked")
    faceElement.innerText = store.getState().face;
  })

  const faceElement = document.querySelector("#faces");
  store.dispatch({ type: "" })
  // const currFace = store.getState().face
  // faceElement.innerText = currFace;

  store.subscribe(() => {
    faceElement.innerText = store.getState().face;
  })

  document.querySelector("#happy").addEventListener("click", function () {
    store.dispatch({ type: "happy" })
    // const currFace = store.getState().face
    // faceElement.innerText = currFace;
  })

  document.querySelector("#sad").addEventListener("click", function () {
    store.dispatch({ type: "sad" })
    // const currFace = store.getState().face
    // faceElement.innerText = currFace;
  })

  document.querySelector("#angry").addEventListener("click", function () {
    store.dispatch({ type: "angry" })
    // const currFace = store.getState().face
    // faceElement.innerText = currFace;
  })

  document.querySelector("#confused").addEventListener("click", function () {
    store.dispatch({ type: "confused" })
    // const currFace = store.getState().face
    // faceElement.innerText = currFace;
  })
}
