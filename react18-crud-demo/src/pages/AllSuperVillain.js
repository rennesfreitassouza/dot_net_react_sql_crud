import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function AllSuperVillain() {
    const [superVillains, setSuperVillains] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5024/SuperVillain")
            .then((response) => {
                setSuperVillains((existingData) => {
                    return response.data;
                });
            });
    }, []);

    function showConfirmPopupHandler(id){
        setShowModal(true);
        setItemToDelete(id);
    }

    function closeConfirmPopupHandler(){
        setShowModal(false);
        setItemToDelete(0);
    }

    function deleteConfirmHandler(){
        axios.delete(`http://localhost:5024/SuperVillain/${itemToDelete}`)
        .then((response) => {
            setSuperVillains((existingData) => {
                return existingData.filter(_ => _.id !== itemToDelete);
            });
            setItemToDelete(0);
            setShowModal(false);
        });
    }

    return (
        <>
            <DeleteConfirmation
            showModal={showModal}
            title = "Delete Confirmation!"
            body = "Are you sure to delete the item?"
            closeConfirmPopupHandler = { closeConfirmPopupHandler }
            deleteConfirmHandler = { deleteConfirmHandler }
            >

            </DeleteConfirmation>
            <Row className="mt-2">
                <Col md={{ span: 4, offset: 4 }}>
                    <Button variant="primary" type="button" onClick={() => { navigate("/add-supervillain") }}>
                        Add A Villain
                    </Button>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4 mt-1">
                {
                    superVillains.map((sv) => (
                        <Col key={sv.id}>
                            <Card>
                                <Card.Img variant="top" src={sv.imageURL} />
                                <Card.Body>
                                    <Card.Title>{sv.villainName}</Card.Title>
                                    <Card.Text>
                                        <b>Franchise:</b> {sv.franchise}
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Powers:</b> {sv.powers}
                                    </Card.Text>
                                    <Button
                                        variant="primary" 
                                        type="button" 
                                        onClick={() => {
                                            navigate(`/update-supervillain/${sv.id}`) 
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger" 
                                        type="button" 
                                        onClick={() => {showConfirmPopupHandler(sv.id);}}
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </>
    );
}

export default AllSuperVillain;