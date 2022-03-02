/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import "animate.css";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser, updateUser } from "../redux/actions/bookAction";

export const ItemBook = ({ data }) => {
  const dispatch = useDispatch();

  // console.log({ data });
  const { nombre, direccion, apellido, telefono, id } = data;
  return (
    <div className="card  m-1 animate__animated animate__fadeInUp">
      <div className="card-body">
        <h5 className="card-title">
          {nombre} {apellido}
        </h5>
        <p className="card-text">{telefono}</p>
        <p className="card-text">{direccion}</p>

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
