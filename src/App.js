import React from 'react';  // Import React
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';  // Import required components
import Login from './Login';  // Import your Login component
import ProtectedRoute from './ProtectedRoute';  // Import your ProtectedRoute component
import Dashboard from './Dashboard';  // Import your Dashboard component
import Profile from './profile';  // Import your Profile component
import Contact from './contact';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NormalRoute from './NormalRoute';
import Logout from './Logout';
import AddRoom from './room_management/AddRoom'
import DeleteRoom from './room_management/DeleteRoom'
import EditRoom from './room_management/EditRoom'

function App() 
{
    var [user, setUser] = useState("");
    var history = useHistory();


    useEffect(()=>{
        // debugger;
        var username = sessionStorage.getItem('username');
        if(username!=null && username !="")
        {
                setUser(username)
        }
        else
        {
                setUser("Guest");
        }
    }, [])


  return (
    <BrowserRouter>
         <hr></hr>
              <div style={{padding: 20}}>
               {/* Conditionally render the Contact link based on user's login status */}
       <Link to="/contact">Contact</Link>
      {" "}| 
      {"  "}
                <Link to="/profile">Profile</Link> | {"  "}
                {/* <button onClick={handleLogout} className="btn btn-primary">Logout</button> */}
                | {"  "}
                <Link to="/logout">Logout</Link>
                | {"  "}
                <Link to="/delete-room">delete_room</Link>

              </div>
            <hr></hr>

      {/* Set up the navigation links */}
     

      <Switch>
        {/* Route for the Login page */}
        <Route path="/contact" component={Contact} />

        {/* ProtectedRoute for the Dashboard */}
        <ProtectedRoute path="/Dashboard" component={Dashboard} />



        {/* ProtectedRoute for the Profile */}
        <ProtectedRoute path="/profile" component={Profile} />

        {/* Default route */}
        <NormalRoute exact path="/login" 
                                 component={Login}
                                 setUser={setUser}
        />

        {/* Route for the Logout component */}
        <Route path="/logout" component={Logout} />


{/* ProtectedRoute for Add Room */}
<ProtectedRoute path="/add-room" component={AddRoom} />

{/* ProtectedRoute for Edit Room */}
<ProtectedRoute path="/edit-room/:roomId" component={EditRoom} />

{/* ProtectedRoute for Delete Room */}
<ProtectedRoute path="/delete-room" component={DeleteRoom} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
