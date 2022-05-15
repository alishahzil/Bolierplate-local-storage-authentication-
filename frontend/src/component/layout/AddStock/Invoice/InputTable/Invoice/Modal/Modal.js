import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";



//generate empty Model Table Rows
const EmptyModaltables = ({ length }) => {
  let row = [];
  if (length < 9) {
    for (let i = length; i < 9; i++) {
      row.push(
        <tr key={i}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  }
  return row;
};

const Modal = ({ modalToggle, setShow, senddatatoinvoice, data, setdata }) => {
  const [search, setsearch] = useState("");
  const [modalRow, setModalRow] = useState(0);
  const ref = useRef();

  //Selecting Table Index
  const tableSelectModalToggle = (index) => {
    setModalRow(index);
    ref.current?.focus();
  };

  //Nagivating UP and down in table by press up and down arrow keys using table index
  const handleKeyDown = (e, item) => {
    if (e.keyCode === 38) {
      if (modalRow + 1 > 1) {
        tableSelectModalToggle(modalRow - 1);
      }
    } else if (e.keyCode === 40) {
      if (modalRow + 1 < data.length) {
        tableSelectModalToggle(modalRow + 1);
      }
    } else if (e.keyCode === 13) {
      senddatatoinvoice(data[modalRow]);
    }
  };

  //search medicine into database
  const searchdata = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
    if (e.target.value.length > 0) {
     
    } else {
      setdata([]);
    }
  };



  const closeModalIfClickedOutside = (e) => {
    if (e.target.className === "modal_cover") {
      console.log("here");
      setShow(false);
    }
  };
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="modal_cover" onClick={closeModalIfClickedOutside}>
      <div className="modal">
        <div className="modal_body">
          <div className="modal_header">
            <h2>Search Items</h2>
           
          </div>
          <input
            className="modal_input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              searchdata(e);
            }}
          />
          <div className="table-scroll">
            <table className="modal_table">
              <thead>
                <tr>
                  <th className="input-same-1">Code</th>
                  <th className="modal_input_1 ">Item Name</th>
                  <th className="input-same-2">Price</th>
                  <th className="input-same-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.length == 0
                  ? ""
                  : data.map((item, index) => (
                      <tr
                        key={index}
                        ref={index == 0 ? ref : null}
                        className={modalRow === index ? "select_table" : null}
                        onClick={() => tableSelectModalToggle(index)}
                        onDoubleClick={() => senddatatoinvoice(item)}
                        tabindex={index}
                        onKeyDown={(e) => {
                          handleKeyDown(e, item);
                        }}
                      >
                        <td className="center">{item.Code}</td>
                        <td>{item.Name}</td>
                        <td className="center">
                          {parseFloat(item.STP.toFixed(2))}
                        </td>
                        <td className="center">{item.Qty}</td>
                      </tr>
                    ))}
                <EmptyModaltables length={data.length} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
