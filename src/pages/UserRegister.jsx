import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/Button'
import '../style/pages/Form.css'
import Header from '../components/Header'

function UserRegister() {
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
            <div class="role-cont">
                    <select class="ui dropdown">
                    <option value="">Role</option>
                    <option value="5">Human Resource</option>
                    <option value="4">Analyst</option>
                    <option value="3">Designer</option>
                    <option value="2">Support</option>
                    <option value="1">Developer</option>
                    <option value="0">Tester</option>
                    </select>
            </div>
            <div>
              <Link to='/userlogin'>
               <p>Login</p>
              </Link>
            </div>
            <Link to="/user"><Button button = {'submit'} /></Link>
        </form>
        </div>
    </>
  )
}
export default UserRegister
