import UserAddForm from "./Components/UserAddForm.jsx"
import './App.css'
import { useState, useEffect } from "react";
import { addUserAPI, getUserAPI, deleteUserAPI, editUserAPI } from "./api.js"
//import { v4 } from "uuid"
import User from "./Components/User.jsx"
import Loader from "./Components/Loader.jsx"

function App() {

  const [users, setUsers] = useState([]);
  const [editdata, setEditdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadallUsers = async () => {
    setLoading(true);
    const users = await getUserAPI();
    setUsers(users);
    setLoading(false);
  }

  useEffect(() => {
    loadallUsers();
  }, []);

  const addUser = async (details) => {
    setLoading(true);
    const user = await addUserAPI(details);
    setUsers([...users, user]);
    setLoading(false);
  }

  const deleteUser = async (id) => {
    setLoading(true);
    const user = await deleteUserAPI(id);
    const tmp = [...users];
    const userlist = tmp.filter((obj) => obj.id != user.id);
    setUsers(userlist);
    setLoading(false);
  }

  const loadEditData = (data) => {
    console.log(data);
    setEditdata(data);
  }

  const editUser = async (editeddata, id) => {
    setLoading(true);
    console.log(editeddata)
    console.log(id);
    const response = await editUserAPI(editeddata, id);
    const tmp = [...users];
    const ind = tmp.findIndex((obj) => obj.id == response.id);
    tmp[ind] = { ...tmp[ind], ...response };
    setUsers(tmp);
    setEditdata(null);
    setLoading(false);
  }


  return (
    <div>
      {console.log(users)}
      {console.log(editdata)}
      {loading && <Loader />}
      <UserAddForm addUser={addUser}
        editData={editdata}
        editUser={editUser}
      />
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
        {users.map((obj) => (
          <User key={obj.id}
            id={obj.id}
            name={obj.name}
            email={obj.email}
            phone={obj.phone}
            address={obj.address}
            city={obj.city}
            zipcode={obj.zipcode}
            image={obj.image}
            deleteUser={deleteUser}
            loadEditData={loadEditData}
          />
        ))}
      </div>
    </div>
  )

}

export default App
