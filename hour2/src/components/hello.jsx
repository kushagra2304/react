// js is written inside {}
//props are passed from parent to child component

function Hello({ name }) {
    return <h1>Hello, {name}!</h1>;
}
export default Hello;

function User(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  );
}

export default User;

//props destructuring
function User({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}   
export default User;

//conditional rendering using props
function User({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      {role === "admin" && <span>Admin</span>}
    </div>
  );
}
export default User;

//resuable component
function Button({ text }) {
  return <button>{text}</button>;
}

export default Button;


//passingg function as props



function cam(){
    const handleClick=()=>{
        alert("button clicked");
    }
    return(
        <div>
            <Button onClick={handleClick} text="Click Me"/>
        </div>
    );
}


