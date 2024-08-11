import { useEffect, useState } from "react"
import "./UserAddForm.css"
import propTypes from "prop-types"

const initialstate = {
    username: "", useremail: "", userphone: "", useraddress: "", usercity: "", userzipcode: "", userimage: ""
}

const UserAddForm = ({ addUser, editData, editUser }) => {

    const [formState, setFormState] = useState(initialstate);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editData) {
            editUser(formState, editData.id);
            setFormState(initialstate);
        }
        else {
            addUser(formState);
            setFormState(initialstate);
        }
    }

    useEffect(() => {

        if (editData) {
            setFormState({
                ...initialstate, username: editData.name, useremail: editData.email, userphone: editData.phone, useraddress: editData.address,
                usercity: editData.city, userzipcode: editData.zipcode, userimage: editData.image
            });
        }
    }, [editData]);

    return (<div className="parent">
        {console.log(editData)}
        <div className="child">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="text" name="username" id="username" value={formState.username} required />
                <br />
                <br />
                <label htmlFor="useremail">Email</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="email" name="useremail" id="useremail" value={formState.useremail} required />
                <br />
                <br />
                <label htmlFor="userphone">Phone no</label>
                &nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="number" name="userphone" id="userphone" value={formState.userphone} required />
                <br />
                <br />
                <label htmlFor="useraddress">Address</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="text" name="useraddress" id="useraddress" value={formState.useraddress} required />
                <br />
                <br />
                <label htmlFor="usercity">City</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="text" name="usercity" id="usercity" value={formState.usercity} required />
                <br />
                <br />
                <label htmlFor="userzipcode">Zipcode</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="number" name="userzipcode" id="userzipcode" value={formState.userzipcode} required />
                <br />
                <br />
                <label htmlFor="userimage">Image</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input onChange={handleChange} type="text" name="userimage" id="userimage" value={formState.userimage} required />
                <br />
                <br />
                <button style={{ cursor: "pointer" }} type="submit">Submit</button>
            </form>
        </div>
    </div>);
}

UserAddForm.propTypes = {
    addUser: propTypes.func,
    editData: propTypes.object,
    editUser: propTypes.func,
}

export default UserAddForm