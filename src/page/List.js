import React from 'react';
import { useSearchParams } from 'react-router-dom';

function List(props) {
    const [searchParams,updateSearchParams] = useSearchParams();
    let page = searchParams.get("page");  // 쿼리스트링 객체 가져옴

    function next(){
        updateSearchParams({page:Number(page)+1}); // setSearchParams 를 사용해 업데이트
    }

    return (
        <div>
            <h1>List page :{page}</h1>
            <button onClick={next}>다음페이지</button>
        </div>
    );
}

export default List;