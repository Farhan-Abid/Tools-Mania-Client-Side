import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`https://evening-dawn-28634.herokuapp.com/clickPurchase?customer=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          } else {
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-xl text-accent font-bold mb-7 ">
        My Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              {/* <th>Time</th> */}
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.quantity}</td>
                {/* <td>{a.slot}</td> */}
                <td>{order.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
