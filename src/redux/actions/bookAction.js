/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { types } from "../types";

const getUsersList = (payload) => {
  return {
    payload,
    type: types.getUsers,
  };
};

const deleteUser = (payload) => {
  return {
    payload,
    type: types.deleteUser,
  };
};

const createUser = (payload) => {
  return {
    payload,
    type: types.createUser,
  };
};

const updateUser = (payload) => {
  return {
    payload,
    type: types.updateUser,
  };
};

const editUser = (payload) => {
  return {
    payload,
    type: types.editUser,
  };
};

export { getUsersList, deleteUser, createUser, updateUser, editUser };
