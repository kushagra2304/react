import { useState } from "react";

function LoginForm() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
  email: "",
  password: "",
  role: ""
});
    // const [role, setRole] = useState("");

    const handleSubmit= (e)=> {
        e.preventDefault(); //prevent unnessary page reload
        // console.log(username, password);
        console.log(formData);
    }
    return(
        <form onSubmit={handleSubmit}> 
            <input   //this input components is controlled
            type="text" 
            placeholder="Username"
            value={formData.email}
            onChange={(e)=> setFormData({...formData, email: e.target.value})} 
            />
            <input 
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e)=> setFormData({...formData, password: e.target.value})} 
            />
            <button type="submit">Login</button>

            <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
  <option value="">Select</option>
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>
        </form> 
    )
}
export default LoginForm;

//basic validation 
// if (!email || !password) {
//   alert("All fields required");
//   return;
// }