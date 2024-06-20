import Login from "./Login";
import Users from "./users";


const App = () => {
const baseUrl = process.env.REACT_APP_BASE_URL;
console.log({baseUrl})
return(
  <div>
    {/* <h2>Login</h2> */}
   <Login/>
   <Users/>
  </div>
)
}

export default App;