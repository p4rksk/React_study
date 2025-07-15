import React, { useState } from 'react';



function Body(props) {
    const [number, setNumber] = useState("01012345678");
    const changePhone = () => {
        setNumber("01011111111");
    }
    return (
        <div>
            <div>이름: 서강준</div>
            <div>전화번호:{number}</div>
            <button onClick={changePhone}>휴대폰번호 변경</button>
        </div>
    );
}

export default Body;