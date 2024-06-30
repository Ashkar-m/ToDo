import React,{useState} from 'react';
import './App.css';

function App() {
  const today=new Date();
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
  
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  const completedTask=toDos.filter(obj=>obj.status)
  console.log(toDos)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's a chearfull {dayOfWeek} !!</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder=" Add An item..." />
        <i onClick={()=>{ if (toDo.trim() === "") {alert("Please enter a task before adding."); return;}
          setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]);setToDo('')}} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=>{
          return(<div className="todo">
            <div className="left">
              <input onChange={
                (e)=>{console.log(e.target.checked)
                  setToDos(toDos.filter((obj2)=>{
                    if(obj2.id===obj.id)
                      {obj2.status=e.target.checked}
                      return obj2
                  }))
                }
              } value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
            <i onClick={() => {  setToDos(toDos.filter(obj2 => obj2.id !== obj.id));
                }} className="fas fa-times"></i>
            </div>
          </div>)     
        })}
      </div>

      
      <div>
    {completedTask.length > 0 && (
      <React.Fragment>
        <h1>Completed Tasks</h1>  {/* Print header only if there are completed tasks */}
        {completedTask.map((obj, index) => (
          <div key={index}>
            <h2>{obj.text}</h2>
          </div>
        ))}
      </React.Fragment>
    )}
  </div>
    </div>
  );
}

export default App;