import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos'
import MyForm from './Components/MyForm';
import React, { useState } from 'react'


function App() {
  const [show_form_status, setStt] = useState(false)
  let [counter, updateCounter] = useState(0)
  let [user, setUser] = useState("")
  let [editIndex, updateEditIndex] = useState(-1)
  const openForm = () => {
    setStt(true)
  }

  const backToHome = () => {
    setStt(false)
  }

  const saveData = (userData) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (editIndex > -1) {
      users[editIndex] = userData
    } else {
      users.push({
        // id: Math.ceil(Math.random()) * (1 + users.length),
        title: userData.title,
        body: userData.body
      })
    }
    
    localStorage.setItem("users", JSON.stringify(users));

    setStt(false)
  }

  const deleteData = (userIndx) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let updatedList = users.filter((_, index) => index !== userIndx)
    localStorage.setItem("users", JSON.stringify(updatedList));
    updateCounter(counter + 1)
  }
  const editData = (userIndx) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.filter((_, index) => index === userIndx)
    setUser(user)
    setStt(true)
    updateEditIndex(userIndx)
  }
  return (
    <div className="container">
      <Header title="ToDo App" callBack={openForm} homeDelegation={backToHome} />
      {
        show_form_status ? <MyForm callBack={saveData} editUser={user} /> :
          <Todos editUserData={editData} editUserIndex={editIndex} callBack={deleteData} />
      }
    </div>
  );
}

export default App;
