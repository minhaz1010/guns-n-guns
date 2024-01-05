import React from "react";

const Modal = (props) => {
  const { name, img, action } = props.details;

  return (
    <dialog id={`my_modal_${props.details.id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{name}</h3>
        <img src={img} alt={name} style={{ width: "100%" }} />
        <p className="text-xl font-extralight">{action}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
