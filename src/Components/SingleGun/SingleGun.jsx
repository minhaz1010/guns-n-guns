import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const { id, name, img, action, price, category } = props.guns;
  // console.log(props);
  // console.log(props.guns);

  return (
    <div className="gun-container ">
      <div className="card w-96 h-full glass ">
        <figure>
          <img src={img} alt="car!" className="w-96 h-56" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{name}</h2>
          <div className="flex gap-x-3">
            <p className="badge badge-outline">{action}</p>
            <p className="badge badge-outline"> {category}</p>
          </div>
          <div className="card-actions justify-end space-x-8">
            <button
              className="btn btn-primary"
              onClick={() => props.handleAddToCart()}
            >
              Add to cart
            </button>
            <button
            className="btn text-black"
            onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
          >
            open modal
          </button>
          </div>
        </div>
        <div>
        </div>
          <Modal details={props.guns}></Modal>
      </div>
    </div>
  );
};

export default SingleGun;
