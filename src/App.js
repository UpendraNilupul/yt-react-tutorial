
import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';


function App() {
  return (
    <>
      <div>
        <h1>My app</h1>
      </div>
      <p>my paragraph</p>
      {
        myData.map(ele=>{
          return <Main></Main>
        })
      }


    </>
    
   

  );
}

export default App;
