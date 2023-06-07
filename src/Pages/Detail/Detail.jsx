import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Detail = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const params = useParams()
    const _id = params.id;
    //console.log(id);
    const [shows, setShows] = useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setShows(data))
    }, [])

    const currentShow = shows.find(show => show.show.id == _id)
    const image = currentShow?.show?.image?.medium;
    const name = currentShow?.show?.name;
    const language = currentShow?.show?.language;
    const summary = currentShow?.show?.summary;
    const networkName = currentShow?.show?.network?.name;
    //console.log(currentShow?.show?.image);
    console.log(currentShow);

    function removeHTMLTags(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerText;
    }
    const innerSummary = removeHTMLTags(summary);
    const handleBookForm = event => {
        event.preventDefault()
        const form = event.target;
        const showName = form.showName.value;
        const quantity = form.quantity.value;
        const showDetails = { showName, quantity }


        let showCart = {}
        const storedCart = localStorage.getItem('show-cart')
        if (storedCart) {
            showCart = JSON.parse(storedCart)
        }
        showCart[_id] = showDetails;
        localStorage.setItem('show-cart', JSON.stringify(showCart))






        console.log(showName, quantity);
    }
    return (
        <div className='m-5'>
            <div className='d-flex'>
                <div>
                    {/* image */}
                    <img src={image} alt="" />
                </div>
                <div className='ps-5'>
                    {/* summary  */}
                    {name && <h1>Name: {name}</h1>}
                    {language && <p>Language: {language}</p>}
                    {networkName && <p>Network: {networkName}</p>}
                    {summary && <p>Summary: {innerSummary}</p>}
                    <Button variant="primary" onClick={handleShow}>
                        Book Show
                    </Button>
                </div>
            </div>
            <div>
                {/* Modal  */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleBookForm}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control type='text' name='showName' value={name} />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type='number' min='0' name='quantity' />
                            </Form.Group>
                            <input className='btn btn-primary' type="submit" value="Book" onClick={handleClose} />

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Detail;