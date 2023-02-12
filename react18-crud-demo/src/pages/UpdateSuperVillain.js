import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateSuperVillain() {

    const superVillainName = useRef("");
    const franchise = useRef("");
    const powers = useRef("");
    const imgUrl = useRef("");

    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://localhost:7208/SuperVillain/${id}`)
            .then((response) => {
                superVillainName.current.value = response.data.villainName;
                franchise.current.value = response.data.franchise;
                powers.current.value = response.data.powers;
                imgUrl.current.value = response.data.imageURL;
            });
    }, []);


    function updateSuperVillainHandler(){
        var payload = {
            villainName: superVillainName.current.value,
            franchise: franchise.current.value,
            powers: powers.current.value,
            imageURL: imgUrl.current.value,
            id:id
          }
        axios.put("https://localhost:7208/SuperVillain/", payload)
        .then((response) => {
            navigate("/");
        });
    }
    return (
        <>
            <legend>Update A SuperVillain</legend>
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
                
                <Button variant="primary" type="button" onClick={updateSuperVillainHandler}>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default UpdateSuperVillain;