import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const Purchase = ({ product }) => {
  const [user, loading] = useAuthState(auth);
  const {
    _id,
    img,
    supplier,
    name,
    description,
    price,
    available,
    minimum
  } = product;

  const handlePurchase = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const clickPurchase ={
      toolsId : _id,
      tools: name,
      toolsAvailable: available,
      toolsMinimum: minimum,
      quantity,
      user: user.email,
      userName: user.displayName,
      phone: event.target.phone.value

    }

    fetch('http://localhost:5000/clickPurchase', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(clickPurchase)
    })
    .then(res => res.json())
    .then(data => {

    })
  };
  return (
    <div>
      <h2 className="text-center text-4xl my-5">Happy Buying!!</h2>
      <div class="card lg:card-side bg-base-100 shadow-xl mx-11">
        <figure>
          <img className="w-2/4" src={img} alt={name} />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">{name}</h2>

          <p>{description}</p>
          <p className="text-xl ">
            Price:{price}
            <small className="font-semibold">/piece</small>
          </p>
          <div class="overflow-x-auto">
           
          </div>
        </div>
      </div>

      <form
        onSubmit={handlePurchase}
        className="grid grid-cols-1 gap-4 my-7 justify-items-center "
      >
        <label class="label block mr-52">
          <span class="label-text">Minimum order:</span>
        </label>
        <input
          type="number"
          disabled
          value={minimum}
          id="order"
          className="input input-bordered w-full max-w-xs"
        />

        <label class="label block mr-60">
          <span class="label-text">Available:</span>
        </label>
        <input
          type="number"
          disabled
          value={available}
          className="input input-bordered w-full max-w-xs"
        />
        <label class="label block mr-60">
          <span class="label-text">Ordered Quantity:</span>
        </label>
        <input
          type="number"
          name="quantity"
          min={minimum}
          max={available}
          placeholder="Put your Quantity here"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          name="name"
          disabled
          value={user.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user.email}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Purchase"
          placeholder="Type here"
          className="btn btn-accent input input-bordered w-full max-w-xs text-white"
        />
      </form>
    </div>
  );
};

export default Purchase;
