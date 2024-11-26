import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/Button'
import '../style/pages/Form.css'
import Header from '../components/Header'

function AdminRegister() {
  return (
    <>
    <Header/>
    <div class="form-container">
        <h1>Sign Up</h1>
        <form action="#" method="post">
            <div class="form-group">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required/>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div>
              <Link to='/adminlogin'>
               <p>Login</p>
              </Link>
            </div>
            <Link to="/admin"><Button button = {'submit'} /></Link>
        </form>
        </div>
    </>
  )
}
export default AdminRegister
