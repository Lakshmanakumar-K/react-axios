import "./User.css"
import propTypes from "prop-types"

const User = ({ id, name, email, phone, address, city, zipcode, image, deleteUser, loadEditData }) => {

    const handleDelete = () => {
        deleteUser(id);
    }

    const handleEdit = () => {
        loadEditData({ id, name, email, phone, address, city, zipcode, image });
    }

    return (<div className="user_child">
        <img style={{ width: "100%", height: "300px", borderRadius: "10px" }} src={image} alt="" />
        <p>Name - {name}</p>
        <p style={{ width: "90%" }}>Email - {email}</p>
        <p>Phone - {phone}</p>
        <p>Address - {address}</p>
        <p>City - {city}</p>
        <p>Pin - {zipcode}</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <button style={{ margin: "10px", cursor: "pointer" }} onClick={handleEdit}>Edit</button>
            <button style={{ margin: "10px", cursor: "pointer" }} onClick={handleDelete}>Delete</button>
        </div>
    </div>);
}

User.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    email: propTypes.string,
    phone: propTypes.number,
    address: propTypes.string,
    city: propTypes.string,
    zipcode: propTypes.number,
    image: propTypes.string,
    deleteUser: propTypes.func,
    loadEditData: propTypes.func,
}

export default User