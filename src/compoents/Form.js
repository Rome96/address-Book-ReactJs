import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { createUser, updateUser } from "../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux";

export const Form = () => {
  const dispatch = useDispatch();
  const { userList, editUser, idUser } = useSelector((state) => state.bookReducer);

  console.log("editUser", editUser);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    },
  });

  const onSubmit = (data) => {
    const dataCreateUser = { ...data, id: uuidv4() };
    if (editUser) {
      dispatch(updateUser(data));
      reset({
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
      });
    } else {
      dispatch(createUser(dataCreateUser));
    }
    // dispatch(createUser(dataCreateUser));
    reset({
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    });
  };

  useEffect(() => {
    if (editUser) {
      _dataUpdate();
    }
  }, [editUser]);

  const _dataUpdate = () => {
    const dataUpdate = userList.find((user) => user.id === idUser);
    reset(dataUpdate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("nombre", { required: true })}
        type="text"
        placeholder="Nombre:"
        className="form-control p-1 mt-2"
      />
      {errors.nombre && <p className="text-danger">Este campo es requerido.</p>}

      <input
        {...register("apellido", { required: true })}
        type="text"
        placeholder="Apellido:"
        className="form-control  p-1 mt-2"
        aria-label="default input example"
      />
      {errors.apellido && <p className="text-danger">Este campo es requerido.</p>}

      <input
        {...register("telefono", { required: true })}
        type="number"
        placeholder="Telefono:"
        className="form-control  p-1 mt-2"
        aria-label="default input example"
      />
      {errors.telefono && <p className="text-danger">Este campo es requerido.</p>}

      <input
        {...register("direccion", { required: true })}
        type="text"
        placeholder="Dirección:"
        className="form-control  p-1 mt-2"
        aria-label="default input example"
      />
      {errors.direccion && <p className="text-danger">Este campo es requerido.</p>}

      <button className={`mt-4 btn ${!editUser ? "btn-success" : "btn-primary"} `} type="submit">
        {!editUser ? "Crear" : "Actualizar"}
      </button>
    </form>
  );
};
