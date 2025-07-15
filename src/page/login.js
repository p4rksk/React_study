import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, updateUser] = useState ({
        username:"",
        password:""
    })

    function loginProcess(){
        // 1. form 태그 username, password 가져오기

        // 2. 유효성 검사

        // 3. 통신

        // 4. store 상태변경
        dispatch(login());
        
        // 5. 화면 이동
        navigate("/loginComplete");
    }
    
    function move() {
        navigate("/loginComplete");
      }
    
  
        function changeValue(e){
        console.log(e);
        console.log("e.target.value",e.target.value);
        console.log("e.target.name",e.target.name);

       
        updateUser(user => ({
            ...user,
             [e.target.name]: e.target.value
        }));

        console.log("username",user.username);
        console.log("password",user.password);

    }
    
   return (
        <div>
            <form>
                <input type='text' placeholder='username' onChange={changeValue} name="username" />
                <input type='password' placeholder='password' onChange={changeValue} name="password"/>
            <button type='submit'>로그인</button>
            </form>
            <button onClick={loginProcess}>로그인</button>
            <button onClick={move}>로그인 안하고 넘어가기</button>
        </div>
    );
}

export default Login;