import axios from "axios";

const API_URL = "https://66b43fb09f9169621ea2371f.mockapi.io";

const API_data = {name:"",email:"",phone:0,address:"",city:"",zipcode:0,image:""}

const addUserAPI = async (details) => {
    const userdata = {...API_data,name:details.username,email:details.useremail,phone:details.userphone,address:details.useraddress,city:details.usercity,zipcode:details.userzipcode,image:details.userimage};
const response = await axios.post(`${API_URL}/users`,userdata);
console.log(response.data);

return response.data;

}

const getUserAPI = async () => {
    const response = await axios.get(`${API_URL}/users`);
    console.log(response.data);
    return response.data;
}

const deleteUserAPI = async (id) => {
    const response = await axios.delete(`${API_URL}/users/${id}`)
    console.log(response.data);
    return response.data;
}

const editUserAPI = async (details,id) => {
    const userdata = {...API_data,name:details.username,email:details.useremail,phone:details.userphone,address:details.useraddress,city:details.usercity,zipcode:details.userzipcode,image:details.userimage};
    const response = await axios.put(`${API_URL}/users/${id}`,userdata);
    console.log(response.data);
    return response.data;
}

export { addUserAPI, getUserAPI, deleteUserAPI, editUserAPI }