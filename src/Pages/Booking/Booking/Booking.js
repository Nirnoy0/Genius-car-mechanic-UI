import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect( () => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <>
            <div className="container ser">
                <div className="img">
                    <img src={service.img} alt="service img"/>
                </div>
                <div className="detail">
                    <h2>{service.name}</h2>         
                    <p><h6>Details:</h6> {service.description}</p>
                    <h4>Price: ${service.price}</h4>
                    <button onClick="handleConfirm" className="btn btn-success">Confirm</button>
                    {/* <Link to="/booking/confirm">
                        <button className="btn btn-warning" alreat="Successfully Done">Confirm</button>
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default Booking;