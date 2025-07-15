import React, { useState } from 'react';



function Body2(props) {

    const {username, password} = props;

    const [user, updateUser] = useState({
        name : "서강준",
        number : "01012345678",
        username : username,
        password : password
    });

    const changeUser = () => {
        updateUser({
            ...user,
            name : "우도환",
            number :  "01023456789",
            username : "cos",
            password : "1234"
        });
    }
    return (
        <div>
            <div>사용자 : {user.username} 패스워드 : {user.password} </div>
            <div>이름 : {user.name}</div>
            <div>전화번호 : {user.number}</div>
            <button onClick={changeUser}>사용자 변경</button>            
        </div>
    );
}

export default Body2;