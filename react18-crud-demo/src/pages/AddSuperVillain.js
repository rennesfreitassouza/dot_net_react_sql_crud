import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddSuperVillain() {
    const superVillainName = useRef("");
    const franchise = useRef("");
    const powers = useRef("");
    const imgUrl = useRef("");

    const navigate = useNavigate();

    function addVillainHandler(){
        var payload = {
            villainName: superVillainName.current.value,
            franchise: franchise.current.value,
            powers: powers.current.value,
            imageURL: imgUrl.current.value
          }
        axios.post("http://localhost:5024/SuperVillain", payload)
        .then((response) => {
            navigate("/");
        })
    }


    return (
        <>
            <legend>Add A New SuperVillain</legend>
            <Form>
                <Form.Group className="mb-3" controlId="formSuperVillainName">
                    <Form.Label>SuperVillain Name</Form.Label>
                    <Form.Control type="text" ref={superVillainName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFranchise">
                    <Form.Label>Franchise</Form.Label>
                    <Form.Control type="text" ref={franchise} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPowers">
                    <Form.Label>Powers</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={powers} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImageUrl">
                    <Form.Label>ImageUrl</Form.Label>
                    <Form.Control type="text" ref={imgUrl} />
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={addVillainHandler}>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default AddSuperVillain;