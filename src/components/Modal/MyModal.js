import React from 'react';
import { Modal } from 'react-bootstrap';

const MyModal = (props) => {
  return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {props.currentCharacter}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p><b>Height:</b> {props.height}</p>
          <p><b>Mass:</b> {props.mass}</p>
          <p><b>Hair color:</b> {props.hair_color}</p>
          <p><b>Skin color:</b> {props.skin_color}</p>
          <p><b>Eye color:</b> {props.eye_color}</p>
          <p><b>Birth year:</b> {props.birth_year}</p>
          <p><b>Gender:</b> {props.gender}</p>
          <p><b>Homeworld:</b> {props.homeworld}</p>
          <p><b>Films:</b> {props.films}</p>
          <p><b>Species:</b> {props.species}</p>
          <p><b>Vehicles:</b> {props.vehicles}</p>
          <p><b>Starships:</b> {props.starships}</p>
          <p><b>Created:</b> {props.created}</p>
          <p><b>Edited:</b> {props.edited}</p>
          <p><b>Url:</b> {props.url}</p>
        </div>
      </Modal.Body>
    </Modal>
  )

}

export default MyModal;
