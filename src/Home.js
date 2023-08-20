import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <h1>Welcome to Hotel Room Booking Management System</h1>
      <p>
        Our system provides an efficient way to manage hotel operations, room reservations, and guest experiences.
        Explore the various features available for both users and administrators.
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">User Features</div>
            <div className="card-body">
              <ul>
                <li>Register for an account</li>
                <li>Login to access your account</li>
                <li>Check room availability</li>
                <li>Book a room with ease</li>
                <li>Confirm your booking</li>
                <li>Make payments securely</li>
                <li>View your booking history</li>
                <li>Provide feedback on your stay</li>
                <li>Change your account password</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Admin Features</div>
            <div className="card-body">
              <ul>
                <li>Login as an administrator</li>
                <li>View user details and profiles</li>
                <li>View all bookings and reservations</li>
                <li>Edit and manage room details</li>
                <li>Delete rooms as needed</li>
                <li>Change admin account password</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
