import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Body2 from './components/Body2';




function App() {
  return (
    <div>
      <Header/>
      {/* <Body/> */}
      <Body2 username={"ssar"} password={"1234"}/>
    </div>
    )
}

export default App;
