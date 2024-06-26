import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateRoom() {
    const [room_no, setRoom] = useState('');
    const [no_of_beds, setBed] = useState('');
    const [active, setActive] = useState(null);
    const [allRooms, setAllRooms] = useState([]);
    const [livingStudents, setLivingStudents] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/room").then((res) => {
            setAllRooms(res.data);
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
        const roomNo = document.getElementById('roomNo').value;
        axios.put(`http://localhost:8000/update/${roomNo}`, {
            room_no,
            no_of_beds,
            active
        }).then(() => alert("Successfully Updated!!"));
        clearInputFields();
        document.getElementById('roomNo').value = '';
    };

    const getRoomNoValue = () => {
        const roomNo = document.getElementById('roomNo').value;
        const AllRoomNos = allRooms.map((obj) => obj.room_no);
        const findPresentRoomNo = AllRoomNos.filter((obj) => obj === roomNo);
        if (findPresentRoomNo.length <= 0) {
            alert("Room Not Exist");
        } else {
            axios.get(`http://localhost:8000/room/${roomNo}`).then((res) => {
                setRoom(res.data.room_no);
                setBed(res.data.no_of_beds);
                setActive(res.data.active);
            });
        }
    };

    const goBack = () => {
        navigate("/rooms");
    };

    const deleteRoom = () => {
        const roomNo = document.getElementById('roomNo').value;
        axios.get(`http://localhost:8000/room/${roomNo}`).then((res) => {
            if (res.data.living_student == 0) {
                let agree = window.confirm("Are you want to delete");
                if (agree === true) {
                    axios.delete(`http://localhost:8000/delete/${roomNo}`).then((res) => alert("Deleted Room Successfully!"));
                }
            } else {
                alert("Sorry " + res.data.living_student + " Student living in this room");
            }
            clearInputFields();
            document.getElementById('roomNo').value = '';
        });
    };

    return (
        <div>
            <h1 className='text-center mt-4'>Update Room Data</h1>
            <div className='container'>
                <input type="text"
                    className="form-control col-6"
                    id="roomNo"
                    placeholder='Search by Room no'
                />
                <button class="search-btn btn btn-primary col-6 mt-4 mx-auto">Search</button>

            </div>
            <form onSubmit={handleSubmission} className='container'>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputText" className="form-label">Room Number:</label>
                    <input type="text"
                        className="form-control"
                        id="exampleInputText"
                        name='room'
                        onChange={handleChangeRoom}
                        value={room_no}
                        required
                    />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputText" className="form-label">No of Beds:</label>
                    <input type="text"
                        className="form-control"
                        id="exampleInputText"
                        name='bed'
                        onChange={handleChangeBed}
                        value={no_of_beds}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Active or Disable:</label> &nbsp;
                    <input type="checkbox"
                        className="form-check-input"
                        name='active'
                        onChange={handleChangeActive}
                        value={active}
                        checked={active}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Room</button>
            </form>
            <div className="container">
                <button onClick={goBack} className="btn btn-success">Go Back</button>
                <button onClick={deleteRoom} className='btn btn-danger delete-btn'>Delete Room</button>
            </div>
        </div>
    );
}

export default UpdateRoom;
