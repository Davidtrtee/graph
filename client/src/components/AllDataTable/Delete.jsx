import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteActionService } from "../../ApiService/DailyAgentService";

const Delete = ({ url, id, user, type, onUserDelete, title }) => {
  const handleDelete = async (id) => {
    try {
      const { data } = await deleteActionService(url, id);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      onUserDelete();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h5 className="text-center text-dark">{user?.name}</h5>
      <p className="text-dark">
        Are you sure you want to delete from the {title}?
      </p>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => onUserDelete()}
          className="btn btn-secondary fw-bold d-flex w-100 justify-content-center fw-5 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete(user?._id)}
          className="btn btn-danger fw-bold d-flex w-100 justify-content-center fw-5"
        >
          <MdDelete className="my-auto" size={20} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Delete;
