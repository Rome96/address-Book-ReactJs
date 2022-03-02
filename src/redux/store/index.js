/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import bookReducer from "../reducers";

import storage from "redux-persist/lib/storage";
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

//combine reducers
const reducers = combineReducers({
  bookReducer: persistReducer(persistConfig, bookReducer),
});

export const store = createStore(reducers);

export const persistor = persistStore(store);
