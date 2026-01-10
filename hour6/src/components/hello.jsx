import { useEffect } from "react";

useEffect(() => {
    console.log("Hello component mounted");
}); //runs after every render

useEffect(() => {
    console.log("Hello component mounted");
}, []); //runs only once when component mounts

useEffect(() => {
    console.log("Hello component updated");
}, [/* dependencies */]); //runs when dependencies change

function Hello() {
    return <h1>Hello, world!</h1>;

}

export default Hello;