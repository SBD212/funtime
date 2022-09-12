import Modal from "react-bootstrap/Modal";
import styles from "./ModalContainer.module.css";

const ModalContainer = (props) => {
  return (
    <Modal show={true} onHide={props.hideModal}>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={styles.title}> {props.name} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div>
          <p> Organisation/Club: {props.organisation} </p>{" "}
          <p> Phone: {props.phone} </p> <p> Address: {props.address} </p>{" "}
          <div>
            {" "}
            Timings{" "}
            {Object.entries(props.timings).map(([day,time]) => (
              <p key={day}>
                {time}
              </p>
            ))}{" "}
          </div>{" "}
          <p> Postcode: {props.postcode} </p>{" "}
        </div>{" "}
      </Modal.Body>
    </Modal>
  );
};

export default ModalContainer;
