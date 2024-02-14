import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios"; // Import Axios
import LinkModal from "./LinkModal";
import ConfettiCannon from "./ConfettiCannon";
import createToast from "../utils/toast";
const ProposeForm = ({ className = "" }) => {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [modal, setModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            // Make Axios POST request to your API endpoint
            const response = await axios.post(
                "http://localhost:5000/api/v1/Proposal/m",
                {
                    to,
                    from,
                    email,
                    message,
                }
            );

            console.log("Response:", response.data);
            createToast(response.data,"Success") // Log the response
            setModal(true);
            setShowConfetti(true); 
        } catch (error) {
            console.error("Error:", error); 
            createToast(error,"error") 
        }
    };
    

    return (
        <>
            <form className={`form_btn ${className}`} onSubmit={handleSubmit}>
                <InputGroup className="form_wrapper">
                    <Form.Control
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="form_field"
                        placeholder="her/him name"
                    />
                    <br></br>
                    <Form.Control
                    
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="form_field"
                        placeholder="Your Nick Name"
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form_field"
                        placeholder="her/him Email"
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Control
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form_field"
                        placeholder=" Message for her/him"
                    />
                    <br></br>
                </InputGroup>
                <Button className="form_btn" variant="danger" type="submit">
                    Propose Now
                </Button>
            </form>
            {showConfetti && <ConfettiCannon />}
            <LinkModal person={to} show={modal} hide={() => setModal(false)} />
        </>
    );
};

export default ProposeForm;
