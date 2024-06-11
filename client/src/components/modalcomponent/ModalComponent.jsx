import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { expModalState, hideModalExp } from "../../redux/modalExpSlice";

function ModalComponent({ children, title }) {

  const modalShowState = useSelector(expModalState)
  const dispatch = useDispatch()

    return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal centered show={modalShowState} onHide={() => dispatch(hideModalExp())}>
        <Modal.Header closeButton>
          <Modal.Title className="h5">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >{children}</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComponent;
