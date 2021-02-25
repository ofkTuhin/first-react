import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
   
 
  
 
  return (
    <div className="App">
      <header className="App-header">


        
  
    <Users></Users>
    <Person name="tuhin"></Person>
    <Person name="tuhin"></Person>
    <Fish></Fish>

        
      </header>
    </div>
  );
}
function Person(props){
  const style={color:' blue',
  backgroundColor:'White',
  margin:10,
  padding:5,
  width:'150px',
  borderRadius:'5px'
}
const buttonStyle={
  padding:'5px 20px',
  marginBottom:'10px',
  marginLeft:'5px'
}
   const [count,setcount]=useState(0)
   const handle=()=>{
     const push=count+1 ;
     setcount(push)
    

   }
   const handled=()=>{
    const pop=count-1 ;
    setcount(pop)
    if(pop<0){
      setcount(0)
    }
  }
  
  return(

    <div style={style}>
      <h1>{props.name}</h1>
      <h3>count:{count}</h3>
      <button style={buttonStyle} onClick={handle}>push</button>
      <button style={buttonStyle} onClick={handled}>pop</button>
      </div>
      
    
  )
}



const Fish=()=>{
  const fishName=[
    {name:'ilish',price:'450'},
    {name:'rui',price:'250'},
    {name:'panggas',price:'150'},
    {name:'puti',price:'50'},
    {name:'pabda',price:'180'}

  ]
  const fishStyle={marginTop:'20px'}
  return(
    <div style={fishStyle}>
      <ul>
        {
          fishName.map(name=><li>{name.name}</li>)
        }
      </ul>

    </div>
  )

}
 
function Users(){
  const [users,setusers]=useState(0)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setusers(data))
  })
  return(
    <div>
      <h2>Dyanamic:{users.length} </h2>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        
        }
        {
            users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
