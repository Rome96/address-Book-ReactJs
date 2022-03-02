import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser, updateUser } from "../redux/actions/bookAction";

export const ItemBook = ({ data }) => {
    const dispatch = useDispatch();

  // console.log({ data });
  const { nombre, apellido, telefono, id } = data;
  return (
    <div className="card  m-1">
      <div className="card-body">
        <h5 className="card-title">
          {nombre} {apellido}
        </h5>
        <p className="card-text">{telefono}</p>
        <div>
          <i
            className="fa-solid fa-pen-to-square text-success"
            onClick={() => dispatch(editUser(id))}
          ></i>
          <i
            className="fa-solid fa-trash-can m-3 text-danger"
            onClick={() => dispatch(deleteUser(id))}
          ></i>
        </div>
      </div>
    </div>
  );
};
