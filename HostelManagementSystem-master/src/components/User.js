import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function User() {
    return (
        <div className=''>
            <div className='header'>
                <h1 className="text-center mt-2">Hostel Application System</h1>
            </div>
            
            <div className='nav-items'>
                <Link to='/rooms' className='list'>
                    <div className="item-content">
                        <div className="icon">🏠</div>
                        <div className="text">User profile</div>
                    </div>
                </Link>

                <Link to='/registerstudent' className='list'>
                    <div className="item-content">
                        <div className="icon">📝</div>
                        <div className="text">Attendance</div>
                    </div>
                </Link>

                <Link to='/updatestudent' className='list'>
                    <div className="item-content">
                        <div className="icon">🔄</div>
                        <div className="text">Billings</div>
                    </div>
                </Link>

                <Link to='/studentfee' className='list'>
                    <div className="item-content">
                        <div className="icon">💰</div>
                        <div className="text">Room Available</div>
                    </div>
                </Link>

                <Link to='/livingstudents' className='list'>
                    <div className="item-content">
                        <div className="icon">👩‍🎓</div>
                        <div className="text">Notice</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default User;
