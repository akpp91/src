import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/authSlice'

function NavigationBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // logout the user
  const logoutUser = () => {
    // clear the session storage changes
    
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('Role')

    // hide the navigation bar
    dispatch(logout())

    // redirect to login page
    navigate('/')
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Hotel-Booking</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/add_room'>
                  AddRoom
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/delete_room'>
                  Delete-Room
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/edit_room'>
                  Edit-Room
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/BookingList'>
                BookingList
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/users_list'>
                UserList
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/room_available'>
                Room_Available                </Link>
              </li>

            </ul>
          </div>

          <div className='d-flex'>
            <button onClick={logoutUser} className='btn'>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
