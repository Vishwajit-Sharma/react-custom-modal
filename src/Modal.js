const Modal = ({ isOpen, setIsOpen }) => {
  function handleClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modal-div" onClick={handleClick}>
      Modal Content
      <button onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
};
export default Modal;
