import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {
    const navigate = useNavigate();

    function moveUserInfo (){
        navigate("/info/1")
    }

    return (
        
        <div>
            <h1>About</h1>
            <button onClick={moveUserInfo}>유저정보 페이지로 이동</button>
        </div>
    );
} 
export default About;