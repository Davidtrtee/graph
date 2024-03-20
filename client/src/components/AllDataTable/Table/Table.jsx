import React from "react";
import Modal from "../../../Modal/Modal";
import AddAgent from "../../Editor/EditerInterFace";
import Delete from "../Delete";

const Table = ({ columns, data, url, reTake, type }) => {
  const onReFetch = () => {
    reTake();
  };
  return (
    <div className="bg-white rounded p-2 my-3 d-flex">
      <table class="table table-hover table-responsive mx-auto ">
        <thead>
          <tr>
            {Array.isArray(columns)
              ? columns?.map((d) => <th scope="col">{d}</th>)
              : ""}
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data)
            ? data?.map((row) => (
                <tr>
                  {columns.map((c) => (
                    <td>{row[c] || ""}</td>
                  ))}
                  <td>
                    <Modal
                      btnText="Update"
                      btnClasss="btn btn-blue"
                      closeIcon=" fs-1"
                    >
                      <AddAgent
                        id={row?._id}
                        action="update"
                        title="Agent data editor"
                        type={type}
                        agent="Agent name"
                        sales="Sales"
                        btnText="Update agent"
                        onReTake={reTake}
                        detail={row}
                      />
                    </Modal>
                    <Modal
                      btnText="Delete"
                      btnClasss="btn btn-danger mx-2"
                      bodyClass="bg-white"
                      closeIcon=" fs-1"
                    >
                      <Delete url={url} user={row} onUserDelete={onReFetch} />
                    </Modal>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
