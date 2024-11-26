import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import '../style/pages/User.css'
import {Link} from 'react-router-dom'

function User() {
  return (
    <>
      <Header/>
      <div className="btn-cont">
        <Link to='/'>
        <Button button = {'Home'} />
        </Link>
        <Link to='/'>
        <Button button = {'Logout'} />
        </Link>
      </div>
      <div class="profile-card">
    <div class="profile-details">
      <p><strong>First Name:</strong> John</p>
      <p><strong>Last Name:</strong> Doe</p>
      <p><strong>Email:</strong> john.doe@example.com</p>
      <p><strong>Password:</strong> 00000</p>
      <p><strong>Role:</strong> Admin</p>
    </div>
    <Link to='/userregister'>
      <Button button = {'Edit'} />    
    </Link>    
  </div>
    </>
  )
}

export default User
