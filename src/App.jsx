import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/authSlice'
import NavigationBar from './components/navigationBar'
import { Navigate } from 'react-router-dom';

function App() 
{

  const loginStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()


  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['name'] && sessionStorage['name'].length > 0) 
    {
      // update the auth slice status to true
      dispatch(login())
    }
  }, [])

  return <>
    
<div>

{/* Navigation Links */}
{loginStatus && <NavigationBar />}
</div>

<div className="container mt-4">

{/* Page Content */}
<Router>
  <Routes>
<Route exact path="/" element={Login} /> {/* Default route */}
<Route path="/Home" element={Home} />
<Route path="/contact" element={Contact} />
<ProtectedRoute path="/dashboard" element={Dashboard} />
<ProtectedRoute path="/profile" element={Profile} />
<NormalRoute exact path="/login" element={Login}  />
<Route path="/logout" element={Logout} />
<ProtectedRoute path="/add-room" element={AddRoom} />
<ProtectedRoute path="/edit-room" element={EditRoom} />
<ProtectedRoute path="/delete-room" element={DeleteRoom} />
<ProtectedRoute path="/user-management" element={UserManagement} />
<ProtectedRoute path="/BookingManagement" element={BookingManagement} />
<Route path="*" element={<Navigate to="/Home" />} /> {/* Redirect to Home for any other route */}
</Routes>
</Router>
</div>
</>
}


  
export default App;
