import React, { useState, useRef, useEffect, useCallback } from "react";



const Emptytables = ({ length }) => {
  let row = [];
  if (length < 7) {
    for (let i = 0; i < 7; i++) {
      row.push(
        <tr key={i}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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

const Table = ({
  tableSelect,
  setTableSelect,
  clickToUnSelectTableRow,
  setNetTotal,
  clearinvoice,
  clearcurrent,
  setsaveinvoice,
  Invoice,
  saveinvoice,
}) => {
  const [show, setShow] = useState(false); //show model
  const [search, setsearch] = useState(""); //search input
  var [data, setdata] = useState([]); //data from database
  var [invoice, setinvoice] = useState([]); //invoice data
  const [disc, setdisc] = useState(""); //discount
  const [currentdata, setcurrentdata] = useState({
    SNO: "",
    Bonus: "",
    Code: "",
    STP: "",
    TP: "",
    Price: "",
    Bonus: "",
    Cost: "",
    Disc1: "",
    Quantity: "",
    Total: "",
    Name: "",
    Batch: "",
  }); //current data
  const [quantity, setquantity] = useState(null); //quantity of medicine
  const modalToggle = () => setShow(!show);
  const ref = useRef();
  const refback = useRef();

  const reset = {
    SNO: "",
    Bonus: "",
    Code: "",
    STP: "",
    TP: "",
    Price: "",
    Stax: "",
    Bonus: "",
    Cost: "",
    Disc1: "",
    Quantity: "",
    Total: "",
    Name: "",
    Batch: "",
  };
  const tableSelectToggle = (index) => {
    setTableSelect(index);
  };
  //on Double click to select table row for edit
  const onDoubleClicktoedit = (index) => {
    invoice[index].selected = true;
    setcurrentdata(invoice[index]);
    setsearch(invoice[index].Code);
    setquantity(invoice[index].Quantity);
    setdisc(invoice[index].Disc1);
    setinvoice(invoice);
  };

  //handle the next input move if input is empty it can't move
  const handleEnter1 = (event) => {
    if (event.key.toLowerCase() === "enter") {
      if (event.target.value.length > 0) {
        if (search != "") {
          setShow(true);
        
        } else {
          setdata([]);
        }
      }
    }
  };

  function useFocusNext() {

    const controls = useRef([])
    const handler = (event) => {
      if (event.keyCode === 13) {
        // Required if the controls can be reordered
        controls.current = controls.current
          .filter((control) => document.body.contains(control))
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1
          );
        const index = controls.current.indexOf(event.target)
        const next = controls.current[index + 1]
        next && next.focus()
        event.preventDefault()
      }
    }
    return useCallback((element) => {
      if (element && !controls.current.includes(element)) {
        controls.current.push(element)
        element.addEventListener("keydown", handler)
      }
    }, [])

  }

  const focusNextRef = useFocusNext();

  //search the input in the database
  const searchindatabase = (e) => {
    setsearch(e.target.value);
  };
  //get the data from the database and send it to the table
 

  
  //generating the invoice
  const senddatatoinvoice = (item) => {
    setShow(!show);
    setcurrentdata((currentdata) => ({
      ...currentdata,
      SNO: item.SNO,
      Bonus: item.Bonus,
      Code: item.Code,
      STP: Math.floor(item.STP),
      Cost: Math.floor(item.Cost),
      TP: Math.floor(item.TP),
      Name: item.Name,
      Price: Math.floor(item.Price),
      Disc1: item.Disc1,
      Stax: item.Stax,
      Batch: item.Batch,
    }));
    setsearch(item.Code);
    setdisc(0);
    ref.current?.focus();
  };

  //generating invoice
  const putdataintoinvoice = (e) => {
    if (e.key.toLowerCase() === "enter") {
      if (quantity != null && quantity != 0) {
        billcalculation();
        setcurrentdata((currentdata) => ({
          ...currentdata,
          Total: Math.floor(quantity * currentdata.STP),
          Quantity: quantity,
          Disc1: disc,
          selected: false,
          invoiceno: Invoice,
          RNDT:saveinvoice.RandomNo,
          profit: Math.floor(currentdata.Total - currentdata.Cost * quantity),
        }));
        setquantity(null);
        setsearch("");
        setdisc("");
        setTableSelect(null);
        refback.current?.focus();
      } else if (currentdata.Code == "") {
       
      } else {
        
      }
    }
  };
  //add Quantity to the invoice useState
  const addquantity = (e) => {
    e.preventDefault();
    if (currentdata.Code != "") {
      setquantity(e.target.value);
    }
  };
  //disc handler event to calulate discount and total
  const dischandler = (e) => {
    setdisc(e.target.value);
  };
  //bill caculation from sale price
  const billcalculation = () => {
    let total = 0;
    total = currentdata.TP * (disc / 100);
    total = currentdata.TP - total;
    setcurrentdata((currentdata) => ({
      ...currentdata,
      Total: total,
    }));
  };

  useEffect(() => {
    if (currentdata.TP) {
      billcalculation();
    }
  }, [disc]);

  clearinvoice.current = clearallinvoice
  clearcurrent.current = clearcurrentdata
 
  function clearallinvoice() {
    setinvoice([])
    setsaveinvoice([])
    setsearch("")
    setdisc("")
    setquantity("")
    setcurrentdata(reset)
    setTableSelect(null)
   
  }
  function clearcurrentdata() {
    if (tableSelect != null) {
      invoice[tableSelect].selected = false
      invoice.splice(tableSelect, 1)
      setTableSelect(null)
      setsearch("")
      setdisc("")
      setquantity("")
      setcurrentdata(reset)
      setTableSelect(null)
    }
  }

  //Nagivating UP and down in table by press up and down arrow keys using tab index

  const handleKeyDown = (e, index) => {
    if (e.keyCode === 38) {
      if (tableSelect + 1 > 1) {
        tableSelectToggle(tableSelect - 1)
      }
    } else if (e.keyCode === 40) {
      if (tableSelect + 1 < invoice.length) {
        tableSelectToggle(tableSelect + 1)
      }
    } else if (e.keyCode === 13) {
      onDoubleClicktoedit(index)
    }
  };

  useEffect(() => {
    if (currentdata.Quantity !== "" && currentdata.selected != true) {
      const filter = invoice.filter((item) => {
        return item.Code != currentdata.Code
      })
      setinvoice([...filter, currentdata])
      let data = saveinvoice.invoiceEdit
      let check = data.some((item) => item.Code === currentdata.Code)
      if (check) {
        data = data.filter((item) => {
          return item.Code != currentdata.Code
        })
        data.push(currentdata)
        setsaveinvoice((saveinvoice) => ({
          ...saveinvoice,
          invoiceEdit: data,
        }))
      } else {
        let data = saveinvoice.newInvoice
        data = data.filter((item) => {
          return item.Code != currentdata.Code
        })
        data.push(currentdata)
        setsaveinvoice((saveinvoice) => ({
          ...saveinvoice,
          newInvoice: data,
        }))
      }
      if(saveinvoice.newInvoice.length>0 && saveinvoice.invoiceEdit.length>0){
      setinvoice([])
      }
      // setsaveinvoice([...filter, currentdata]);
      setcurrentdata(reset)
    }
     if(saveinvoice.newInvoice.length<=0 && saveinvoice.invoiceEdit.length<=0 && invoice.length> 0){
      setinvoice([])
      }
    setNetTotal(invoice.reduce((total, item) => total + item.Total, 0))
  }, [currentdata, invoice, saveinvoice])

  return (
    <div className="input_table">
      <table className="table_med">
        <thead>
          <tr className="enter">
            <th>
              <input
                disabled
                className="input--1 center"
                id="SNO"
                type="text"
                name="SNO"
                value={currentdata.data == "" ? "" : currentdata.SNO}
              />
            </th>
            <th>
              <input
                className="input-same-2"
                id="Code"
                onKeyDown={handleEnter1}
                ref={refback}
                value={search === "" ? "" : search}
                onChange={(e) => {
                  searchindatabase(e)
                }}
                type="text"
                name="name"
              />
            </th>
            <th>
              <input
                disabled
                className="input-same-3"
                id="name"
                ref={focusNextRef}
                value={currentdata.Name == "" ? "" : currentdata.Name}
                type="text"
                name="name"
              />
            </th>
            <th>
              <input
                disabled
                className="input-same-2 center"
                id="Batch"
                value={currentdata.Batch == "" ? "" : currentdata.Batch}
                ref={focusNextRef}
                type="text"
                name="name"
              />
            </th>
            <th>
              <input
                disabled
                className="input-same-1 center"
                id="SPrice"
                value={
                  currentdata.Price == ""
                    ? ""
                    : parseFloat(currentdata.STP.toFixed(2))
                }
                type="text"
                ref={focusNextRef}
                name="name"
              />
            </th>
            <th>
              <input
                disabled
                className="input-same-1 center"
                id="Bonus"
                type="text"
                ref={focusNextRef}
                value={currentdata.length == 0 ? "" : currentdata.Bonus}
                name="name"
              />
            </th>
            <th>
              <input
                disabled
                className="input-same-1 center"
                id="saleTax"
                type="text"
                ref={focusNextRef}
                value={currentdata.length == 0 ? "" : currentdata.Stax}
                name="name"
              />
            </th>
            <th>
              <input
                ref={show ? ref : focusNextRef}
                className="input-same-1 center"
                id="Quantity"
                type="number"
                min={0}
                value={quantity == null ? "" : quantity}
                onChange={(e) => {
                  addquantity(e)
                }}
                name="name"
              />
            </th>
            <th>
              <input
                className="input-same-1 center"
                id="Bonous"
                type="text"
                ref={focusNextRef}
                onChange={(e) => {
                  dischandler(e)
                }}
                value={disc}
                name="name"
              />
            </th>
            <th>
              <input
                className="input-same-2 last_input center"
                type="text"
                name="name"
                ref={focusNextRef}
                id="Total amount"
                value={quantity != null ? currentdata.Total * quantity : ""}
                onKeyDown={putdataintoinvoice}
              />
            </th>
          </tr>
        </thead>
        <thead>
          <tr className="up" onClick={clickToUnSelectTableRow}>
            <th className="input--1 ">S.NO</th>
            <th className="input-same-1">Code</th>
            <th className="input-same-3">Item Name</th>
            <th className="input-same-2">Batch</th>
            <th className="input-same-1">S.Price</th>
            <th className="input-same-1">Bouns</th>
            <th className="input-same-1">S.Tax</th>
            <th className="input-same-1">Qunatity</th>
            <th className="input-same-1">Disc</th>
            <th className="input-same-2">Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* {invoice.length > 0
            ? invoice.map((item, index) => (
                <tr
                  key={index}
                  className={tableSelect === index ? "select_table" : null}
                  onClick={() => tableSelectToggle(index)}
                  onDoubleClick={() => onDoubleClicktoedit(index)}
                  tabIndex={index}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  <td className="center">{item.SNO}</td>
                  <td className="center">{item.Code}</td>
                  <td>{item.Name}</td>
                  <td className="center">{item.Batch}</td>
                  <td className="center">{parseFloat(item.STP.toFixed(2))}</td>
                  <td className="center">{item.Bonus}</td>
                  <td className="center">{parseFloat(item.Stax.toFixed(2))}</td>
                  <td className="center">{item.Quantity}</td>
                  <td className="center">{item.Disc1}</td>
                  <td className="center">
                    {parseFloat(item.Total.toFixed(2))}
                  </td>
                </tr>
              ))
            : ""} */}
          <Emptytables length={0} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
