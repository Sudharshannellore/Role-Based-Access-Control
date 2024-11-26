import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/Button'
import '../style/pages/Form.css'
import Header from '../components/Header'

function AdminLogin() {
  return (
    <>
    <Header/>
    <div class="form-container">
        <h1>Login</h1>
        <form action="#" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div>
            </div>
            <Link to="/admin"><Button button = {'submit'} /></Link>
        </form>
        </div>
    </>
  )
}
export default AdminLogin;
