import logo from './logo.svg';
import './App.css';

function App() {
  const Product=[{
    name:'tuhin',age:22
  },{
    name:'tuhin1',age:23
  },
  
]
  
 
  return (
    <div className="App">
      <header className="App-header">
        
    <Products name={Product[0]}></Products>
    
    <Person name="tuhin"></Person>
    <Person name="tuhin"></Person>
    <Person name="tuhin"></Person>
    <Person name="tuhin"></Person>
        
      </header>
    </div>
  );
}
function Person(props){
  const style={color:' blue',
  backgroundColor:'green',
  margin:10,
  padding:5,
  width:'150px'
}
  return(
    <div style={style}><h1>{props.name}</h1>
    <h3>i wanna be a jannati</h3></div>
  )
}

function Products(props){
  const productStyle={
    backgroundColor:'blue',
    color:'green',
    width:'150px',
    height:'200px',
    marginTop:'20px'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name.name}</h2>
      <button>tuhin</button>
    </div>
  )
}

export default App;
