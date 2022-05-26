import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllUserRow from "./AllUserRow";
const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://evening-dawn-28634.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-center text-xl text-accent font-bold mb-7 ">
        All Users
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUserRow
                index={index}
                key={user._id}
                user={user}
                refetch={refetch}
              ></AllUserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
