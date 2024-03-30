import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRoom() {
    const [room_no, setRoom] = useState('');
    const [no_of_beds, setBed] = useState('');
    const [active, setActive] = useState(false);
    const [allRooms, setAllRooms] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/room")
            .then((res) => {
                setAllRooms(res.data);
            })
            .catch((error) => {
                console.error("Error fetching rooms:", error);
            });
    }, []);

    const handleChangeBed = e => {
        setBed(e.target.value);
    };

    const handleChangeRoom = e => {
        setRoom(e.target.value);
    };

    const handleChangeActive = e => {
        setActive(e.target.checked);
    };

    const clearInputFields = () => {
        setRoom('');
        setBed('');
    };

    const handleSubmission = e => {
        e.preventDefault();
        
        if (allRooms.some(room => room.room_no === room_no)) {
            alert("Room already exists!");
        } else {
            axios.post("http://localhost:8000/create", {
                room_no,
                no_of_beds,
                active
            })
            .then(() => {
                setShowSuccess(true);
                clearInputFields();
            })
            .catch(error => {
                console.error("Error adding room:", error);
            });
        }
    };

    const goBack = () => {
        navigate("/rooms");
    };

    return (
        <div className="container">
            <h1 className="text-center mt-4">Add New Room</h1>
            
            {showSuccess && (
                <div className="alert alert-success text-center mt-4" role="alert">
                    New Room has been created!
                </div>
            )}

            <form onSubmit={handleSubmission} className="mt-4">
                <div className="mb-3 col-6">
                    <label htmlFor="roomInput" className="form-label">Room Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roomInput"
                        name="room"
                        value={room_no}
                        onChange={handleChangeRoom}
                        required
                    />
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="bedInput" className="form-label">No of Beds:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="bedInput"
                        name="bed"
                        value={no_of_beds}
                        onChange={handleChangeBed}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active or Disable:</label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="active"
                        checked={active}
                        onChange={handleChangeActive}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Room</button>
            </form>

            <button onClick={goBack} className="btn btn-success mt-3">Go Back</button>
        </div>
    );
}

export default AddRoom;
