import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
          
        </Switch>
      </div>
    </>
  );
};
