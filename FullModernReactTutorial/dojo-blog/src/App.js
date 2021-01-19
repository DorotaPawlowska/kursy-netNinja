import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 }; ERROR! + boolenas
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>App Component { title }</h1>
        <p>liked { likes } times</p>
        {/* <p>name { person } </p> */}
        <p>{ 10 }</p>
        <p>{ "hello ninjas" }</p>
        <p>{ [1,2,3,4] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>google</a>
      </div>
    </div>
  );
}

export default App;
