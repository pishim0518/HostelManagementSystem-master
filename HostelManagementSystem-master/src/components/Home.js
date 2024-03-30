import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className=''>
            <div className='header'>
                <h1 className="text-center mt-2">Hostel Application System</h1>
            </div>
            
            <div className='nav-items'>
                <Link to='/rooms' className='list'>
                    <div className="item-content">
                        <div className="icon">🏠</div>
                        <div className="text">Manage Rooms</div>
                    </div>
                </Link>

                <Link to='/registerstudent' className='list'>
                    <div className="item-content">
                        <div className="icon">📝</div>
                        <div className="text">New Students</div>
                    </div>
                </Link>

                <Link to='/updatestudent' className='list'>
                    <div className="item-content">
                        <div className="icon">🔄</div>
                        <div className="text">Change Student Room</div>
                    </div>
                </Link>

                <Link to='/studentfee' className='list'>
                    <div className="item-content">
                        <div className="icon">💰</div>
                        <div className="text">Student Fees</div>
                    </div>
                </Link>

                <Link to='/livingstudents' className='list'>
                    <div className="item-content">
                        <div className="icon">👩‍🎓</div>
                        <div className="text">All Living Students</div>
                    </div>
                </Link>

                <Link to='/hostelexpense' className='list'>
                    <div className="item-content">
                        <div className="icon">💸</div>
                        <div className="text">Hostel Expense</div>
                    </div>
                </Link>

                <Link to='/newemployee' className='list'>
                    <div className="item-content">
                        <div className="icon">👨‍💼</div>
                        <div className="text">New Employees</div>
                    </div>
                </Link>

                <Link to='/updateemployee' className='list'>
                    <div className="item-content">
                        <div className="icon">🔄</div>
                        <div className="text">Update Employee Record</div>
                    </div>
                </Link>

                <Link to='/employeepayment' className='list'>
                    <div className="item-content">
                        <div className="icon">💵</div>
                        <div className="text">Employee Payment</div>
                    </div>
                </Link>

                <Link to='/employeerecord' className='list'>
                    <div className="item-content">
                        <div className="icon">📋</div>
                        <div className="text">Employee Record</div>
                    </div>
                </Link>
                <Link to='/attendance-admin' className='list'>
                    <div className="item-content">
                        <div className="icon">📋</div>
                        <div className="text">Attendance</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
