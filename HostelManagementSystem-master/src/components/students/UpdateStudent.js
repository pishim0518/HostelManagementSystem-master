import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './student.css';

function UpdateStudent() {
    const [student_name, setStudentName] = useState('');
    const [father_name, setFatherName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [student_cnic, setStudentCnic] = useState('');
    const [phone_no, setPhoneNo] = useState('');
    const [college_name, setCollegeName] = useState('');
    const [room_no, setRoomNo] = useState('');
    const [availableRooms, setAvailableRooms] = useState([]);
    const [studentsPhoneNo, setStudentsPhoneNo] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/room")
            .then((res) => {
                const rooms = res.data;
                const newRooms = rooms.filter(room => room.active && room.living_student < room.no_of_beds);
                setAvailableRooms(newRooms);
            });

        axios.get("http://localhost:8000/students")
            .then((res) => {
                setStudentsPhoneNo(res.data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNo = document.getElementById('phoneNo').value;

        axios.put(`http://localhost:8000/update_student/${phoneNo}`, {
            student_name, father_name, email, address, student_cnic, phone_no, college_name, room_no
        })
            .then(() => alert("Updated"))
            .catch(err => console.error("Update Error: ", err));

        clearFields();
        document.getElementById('phoneNo').value = '';
    };

    const getStudentRecord = () => {
        const phoneNo = document.getElementById('phoneNo').value;
        const studentRecord = studentsPhoneNo.find(student => student.phone_no === phoneNo);

        if (!studentRecord) {
            alert("No Student Found");
            return;
        }

        const { student_name, father_name, email, address, student_cnic, phone_no, college_name, room_no } = studentRecord;
        setStudentName(student_name);
        setFatherName(father_name);
        setEmail(email);
        setAddress(address);
        setStudentCnic(student_cnic);
        setPhoneNo(phone_no);
        setCollegeName(college_name);
        setRoomNo(room_no);
    };

    const handleStudenName = (e) => {
        setStudentName(e.target.value);
    };

    const handleFatherName = (e) => {
        setFatherName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCnicNo = (e) => {
        setStudentCnic(e.target.value);
    };

    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value);
    };

    const handleCollegeName = (e) => {
        setCollegeName(e.target.value);
    };

    const handleRoomNo = (e) => {
        setRoomNo(e.target.value);
    };

    const DeleteStudent = () => {
        const phoneNo = document.getElementById('phoneNo').value;
        const confirmDelete = window.confirm("Do you want to delete?");

        if (confirmDelete) {
            axios.delete(`http://localhost:8000/delete_student/${phoneNo}`)
                .then(() => {
                    alert("Deleted Successfully!!");
                    clearFields();
                    document.getElementById('phoneNo').value = '';
                })
                .catch(err => console.error("Delete Error: ", err));
        }
    };

    const clearFields = () => {
        setStudentName('');
        setFatherName('');
        setEmail('');
        setAddress('');
        setPhoneNo('');
        setStudentCnic('');
        setCollegeName('');
    };

    const goBack = () => {
        navigate("/home");
    };

    return (
        <div>
            <h1 className='text-center mt-4'>Update Student</h1>
            <div className="search-container">
                <input type="text"
                    className="search-field"
                    placeholder="Search By Phone no"
                    id="phoneNo"
                />
                <button onClick={getStudentRecord} className="btn btn-primary">Search</button>
            </div>
            <form onSubmit={handleSubmit} className='container'>
                <div className="form-group">
                    <label>Name</label>
                    <input type='text'
                        className='form-control'
                        onChange={handleStudenName}
                        value={student_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Father Name</label>
                    <input type='text'
                        className='form-control'
                        onChange={handleFatherName}
                        value={father_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type='email'
                                               className='form-control'
                                               onChange={handleEmail}
                                               value={email}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label>Permanent Address</label>
                                           <input type='text'
                                               className='form-control'
                                               onChange={handleAddress}
                                               value={address}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label>College Name</label>
                                           <input type='text'
                                               className='form-control'
                                               onChange={handleCollegeName}
                                               value={college_name}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label>CNIC No</label>
                                           <input type='text'
                                               className='form-control'
                                               onChange={handleCnicNo}
                                               value={student_cnic}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label>Phone No</label>
                                           <input type='text'
                                               className='form-control'
                                               onChange={handlePhoneNo}
                                               value={phone_no}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label>Room No</label>
                                           <select className='form-control' value={room_no} onChange={handleRoomNo}>
                                               <option value="" disabled>Select Room</option>
                                               {availableRooms.map(room => (
                                                   <option key={room.room_no} value={room.room_no}>{room.room_no}</option>
                                               ))}
                                           </select>
                                       </div>
                                       <button className='btn btn-primary mt-2' type='submit'>Update Record</button>
                                   </form>
                                   <button className='btn btn-danger delete' onClick={DeleteStudent}>Delete</button>
                                   <button className="btn btn-success" onClick={goBack}>Go Back</button>
                               </div>
                           );
                       }
                       
                       export default UpdateStudent;
                       
