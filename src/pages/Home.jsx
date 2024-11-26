import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import {Link} from 'react-router-dom';
import '../style/pages/Home.css'

const Home = ()=>{

return(<>
<Header/>
<br />
<div className="btn-cont">
    <Link to='/adminregister'>
    <Button button = {'ADMIN'} />
    </Link>
    <Link to='/userregister'>
    <Button button = {'USER'} />
    </Link>
</div>
</>)

}
export default Home