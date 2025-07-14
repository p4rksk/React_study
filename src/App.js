import logo from './logo.svg';
import './App.css';

let num = 1;

let a = {1: "이름", 2: "나이", 3: "생년월일"};

let b = {...a, 4: "휴대폰번호"};




const postList =[
        {id : 1, title:"제목1",content :"내용1"},
        {id : 2, title:"제목2",content :"내용2"},
        {id : 3, title:"제목3",content :"내용3"},
];

let post = postList.map((a)=>({
    ...a,
    content:"내용변경",
}));
console.log (post);


function App() {
  return (
    <div>
      <div>숫자:{num}</div>
      {post.map((i) => (
      <div>
        <h1>{i.id}</h1>, 
        <h1>{i.title}</h1>,
        <h1>{i.content}</h1>
      </div>
      ))}      
    </div>
  );
}

export default App;
