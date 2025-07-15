import React from 'react';

function Post(props) {

    const download = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
            method: "GET"
        });
        let data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <button onClick={download}>Download Post</button>
        </div>
    );
}

export default Post;