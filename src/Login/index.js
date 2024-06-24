import './index.css'
import {useState} from 'react';
import {login} from "./utils";
const Login = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState('');
    console.log({username});
    const handleLogin =  async(e)=>{
        e.preventDefault();
        console.log('are we here');
        const result = await login({username: username,password});
        console.log({result})
    }
    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder="Enter username" type="text" onChange={(e) =>setUsername(e.target.value)} required/>
            <br/>
            <input placeholder="Enter password" type="password" onChange={e=>setPassword(e.target.value)} required/>
            <br/>
            <button type="submit">Login</button>
        </form>
    );
}
export default Login;