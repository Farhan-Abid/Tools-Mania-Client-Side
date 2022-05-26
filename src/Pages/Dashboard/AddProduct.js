import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "2ee4ba2a1f9c4e549495dac45ff9b811";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            brand: data.brand,
            type: data.type,
            img: img,
          };
          console.log(product);
          //Send data to database
          fetch("https://evening-dawn-28634.herokuapp.com/allProducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add Product!");
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-xl text-accent font-bold mb-7">
        Add a New Doctor
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="input input-bordered"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-700">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="input input-bordered"
            {...register("description", {})}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="Product Brand"
            className="input input-bordered"
            {...register("brand")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input
            type="text"
            placeholder="Product type"
            className="input input-bordered"
            {...register("type")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Add"
            className="btn btn-accent text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
