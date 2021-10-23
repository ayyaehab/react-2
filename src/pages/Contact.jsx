// import { users } from "./Users/users";
// import { Link } from "react-router-dom";

// import { useHistory } from "react-router-dom";
import { Route } from 'react-router-dom'
export const Contact = () => {
    
    return (
  
        <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>send your message</h1>
     
    <label>
   email:
    <input type="email" name="email" />
  </label> 
  <br />
  <label>
    message:
    <input type="text" name="message" />
  </label>
     <br />
  <Route render={({ history}) => (
    <button className="btn btn-primary"
      type='button'
      onClick={() => { history.push('/users') }}
    >
      submit
    </button>
  )} />

     </div>

    )}
