import React from 'react';
import { Link } from 'react-router-dom';
import './rooms.css';
import { useNavigate } from 'react-router-dom';

function Rooms() {
    let navigate = useNavigate();

    const goBack = () => {
        navigate("/home");
    }

    return (
        <div className="container">
            <h1 className='header'>Manage Rooms</h1>
            <div className='nav'>
                <Link to='/rooms/addroom' className='link'>
                    <div className="room-card">
                        <span className="card-title">Add New Room</span>
                    </div>
                </Link>

                <Link to='/rooms/record' className='link'>
                    <div className="room-card">
                        <span className="card-title">Rooms Record</span>
                    </div>
                </Link>

                <Link to='/rooms/updateroom' className='link'>
                    <div className="room-card">
                        <span className="card-title">Update/Delete Room</span>
                    </div>
                </Link>
            </div>
            <button onClick={goBack} className="btn btn-success">Go Back</button>
        </div>
    );
}

export default Rooms;
