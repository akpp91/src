import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserList from './components/user/UserList'
import LoginUser from './components/loginRegister/loginUser'
import NavigationBar from './components/navigationBar'
import RegisterUser from './components/loginRegister/registerUser'
import EditRoom from './components/editroom/EditRoom'
// used to register react-toastify
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login } from './features/authSlice'
import BookingList from './components/bookConfirm/Room-Bookings'
import AddRoom from './components/addroom/addRoom'
import DeleteRoom from './components/deleteroom/deleteRoom'
import EditRoomCall from './components/editroom/EditRoomCall'
import RoomAvaibility from './components/roomavailibilty/RoomAvaibility'

function App() {
  // use selector accepts a function which passes the store global state
  // at the moment we are interested only in auth slice
  const loginStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['name'] && sessionStorage['name'].length > 0) {
      // update the auth slice status to true
      dispatch(login())
    }
  }, [])

  return (
    <div className='container-fluid'>
      {/* navigation bar here */}
      {/* conditional rendering */}
      {loginStatus && <NavigationBar />}
      <div className='container'>
        <Routes>
          {/* home component  */}
          {/* <Route path='/' element={} /> */}

          {/* login component */}
          <Route path='/' element={<LoginUser />} />

          {/* register component */}
          <Route path='/register' element={<RegisterUser />} />

          {/* product-gallery component */}
          <Route path='/BookingList' element={<BookingList />} />

          
          {/* addroom component */}
          <Route path='/add_room' element={<AddRoom />} />

          {/* delete component */}
          <Route path='/delete_room' element={<DeleteRoom />} />


          {/* edit component */}
          <Route path='/edit_room' element={<EditRoom />} />

          <Route path='/edit_room/:roomNumber' element={<EditRoomCall />} />

          {/* edit component */}
          <Route path='/users_list' element={<UserList/>} />
          
          {/* room available component */}
          <Route path='room_available' element={<RoomAvaibility/>} />

        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
