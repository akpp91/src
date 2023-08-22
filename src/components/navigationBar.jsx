import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import { logout } from '../features/authSlice'

function NavigationBar() {
  const navigate = Navigate()
  const dispatch = Navigate()

  // logout the user
  const logoutUser = () => {
    // clear the session storage changes
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('Role')
    sessionStorage.removeItem('email')

    // hide the navigation bar
    dispatch(logout())

    // redirect to login page
    navigate('/')
  }

  return (
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

    </div>
  )
}

export default NavigationBar