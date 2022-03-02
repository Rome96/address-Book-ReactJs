import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { ItemBook, Form } from "../compoents";
import { getUsersList } from "../redux/actions/bookAction";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, userList } = useSelector((state) => state.bookReducer);

  // console.log(watch("example"));

  useEffect(() => {
    if (!userList.length) {
      getDataListUser();
    }
  }, []);

  const getDataListUser = async () => {
    try {
      const res = await api.getListUserAll();
      dispatch(getUsersList(res));
      console.log({ res });
    } catch (error) {
      console.log("Error getDataListUser =>", error);
    }
  };

  if (loading)
    return (
      <div className="spinner-border" text-primary role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div className="container p-5 ">
      <div className="d-flex justify-content-center flex-column">
        <h2>Address Book</h2> <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <Form />
            </div>
            <div className="col">
              {!userList.length ? (
                <h2 className="text-warning">¡No hay contactos registrados!</h2>
              ) : (
                <>
                  {userList.map((data) => (
                    <ItemBook key={data.id} data={data} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
