import './App.css';
import Header from './components/Header';


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
      <Header/>
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
