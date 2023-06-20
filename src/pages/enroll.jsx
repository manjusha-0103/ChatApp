import React from 'react'
import  {useNavigate}  from 'react-router-dom';
function Enroll() {
    const navigate = useNavigate();

    const handleEnrollNow = () => {
        navigate('/chatbot');
    };

    return (
    <div>
        <h1>Enter into Student Info System</h1>
        <button onClick={handleEnrollNow}>Enroll Now!</button>
    </div>
  )
}

export default Enroll
