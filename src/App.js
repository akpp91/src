import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';
import Profile from './profile';
import Contact from './contact';
import NormalRoute from './NormalRoute';
import Logout from './Logout';
import AddRoom from './room_management/AddRoom';
import DeleteRoom from './room_management/DeleteRoom';
import EditRoom from './room_management/EditRoom';
import UserManagement from './UserManagement';
import BookingManagement from './BookingManagement';
import Home from './Home';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (username !== null && username !== '') {
      setUser(username);
    } else {
      setUser('Guest');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="container mt-4">
        {/* Navigation Links */}
        <nav className="mb-3">
          <Link className="btn btn-primary me-2" to="/Home">Home</Link>
          <Link className="btn btn-primary me-2" to="/contact">Contact</Link>
          <Link className="btn btn-primary me-2" to="/profile">Profile</Link>
          <Link className="btn btn-primary me-2" to="/delete-room">Delete Room</Link>
          <Link className="btn btn-primary me-2" to="/edit-room">Edit Room</Link>
          <Link className="btn btn-primary me-2" to="/user-management">User Management</Link>
          <Link className="btn btn-primary" to="/BookingManagement">Booking Management</Link>
          <Link className="btn btn-primary me-2" to="/logout">Logout</Link>
        </nav>

        {/* Page Content */}
        <Switch>
          <Route exact path="/" component={Home} /> {/* Default route */}
          <Route path="/Home" component={Home} />
          <Route path="/contact" component={Contact} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <NormalRoute exact path="/login" component={Login} setUser={setUser} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/add-room" component={AddRoom} />
          <ProtectedRoute path="/edit-room" component={EditRoom} />
          <ProtectedRoute path="/delete-room" component={DeleteRoom} />
          <ProtectedRoute path="/user-management" component={UserManagement} />
          <ProtectedRoute path="/BookingManagement" component={BookingManagement} />
          <Redirect to="/" /> {/* Redirect to Home for any other route */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
