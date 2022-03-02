/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import axios from "axios";
import { URL, HTTP_STATUSES } from "./constants";

export const api = {
  async getListUserAll() {
    try {
      const res = await axios.get(`${URL}`);
      if (res.status === HTTP_STATUSES.OK) {
        return res?.data;
      } else {
        return res?.data;
      }
    } catch (error) {
      console.log("Error en la fn getPokeAll");
    }
  },
};
