import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import Table from "./Table/Table";
import { Link, NavLink } from "react-router-dom";
import "./InvoiceTable.css";


const InvoiceTable = () => {
  const [customer, setCustomer] = useState("");
  const [singleC, setsingleC] = useState({});
  const [customers, setcustomers] = useState([]);
  const [salesman, setSalesman] = useState("");
  const [date, setDate] = useState("");
  const [invoice, setInvoice] = useState("");
  const [time, setTime] = useState("");
  const [netTotal, setNetTotal] = useState(0.0);
  const [tableSelect, setTableSelect] = useState();
  const [sideBar, setSideBar] = useState(true);
  const [saveinvoice, setsaveinvoice] = useState({
    invNo: "",
    invoiceEdit: [],
    newInvoice: [],
    totalMedicine: 0,
    RandomNo: "",
  })
 
  const [notdelete, setnotelete] = useState(false);
  const { id } = useParams();

  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();

  useMemo(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  const clickToUnSelectTableRow = (e) => {
    if (e.target.element !== "select_table") {
      setTableSelect(null);
    }
  };

  const clearinvoice = useRef()
  const clearcurrent = useRef()

   const randomString = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 20; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      }



  const customerdropdown = (e) => {
    setCustomer(e.target.value);
 
  };
  //save to database
  const savetodatabase =  (e) => {
    e.preventDefault();
    if (customer.length === 0) {
     
    } else if (saveinvoice.length === 0) {
    
    } else {
       let data ={
        InvNo: saveinvoice.invNo,
        invoiceEdit: saveinvoice.invoiceEdit,
        newInvoice: saveinvoice.newInvoice,
        RandomNo: saveinvoice.RandomNo,
        totalMedicine:   saveinvoice.invoiceEdit.length + saveinvoice.newInvoice.length,
      }
     
      setInvoice(saveinvoice.invNo + 1)
      setsaveinvoice({
        invNo: "",
        invoiceEdit: [],
        newInvoice: [],
        totalMedicine: 0,
        RandomNo: "",
      })
      setNetTotal(0)
      }
  };

  function callfunction() {}

  const sideBarToggle = () => setSideBar(!sideBar);
  useEffect(() => {
   
    if (id !== undefined && id !== null && id !== "" && id !== "0") {
     
      setsaveinvoice((saveinvoice) => ({
        ...saveinvoice,
        invNo: id,
      }));
      setInvoice(id);
      setnotelete(true);
    } else {
    
    }
  }, []);

  return (
    <>
      <div className="back_cover">
        <div className="cover_margin">
          <div onClick={clickToUnSelectTableRow}>
            <div className="Invoice">
              <div className="Invoice-heading">Create New Invoice</div>
              <div className="buttons_Invoice">
                <button className="button_border">Print</button>
                <div className="vertical margin_side"></div>
                <button className=" button_border margin_side">Download</button>
              </div>
            </div>
            <hr />
            <form className="form_row">
              <div className="flex_basis">
                <div className="form_col lable_col">
                  <label> Customer: </label>
                  <label> Disp Name: </label>
                  <label> Address </label>
                  <label className="last_lable"> Contact</label>
                </div>
                <div className="form_col">
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                      customerdropdown(e);
                    }}
                    value={customer}
                    style={{ textAlign: "center" }}
                    list="browsers"
                  />
                  <datalist id="browsers">
                    {customers.map((item, index) => (
                      <option
                        onClick={() => {
                          console.log("here");
                        }}
                        value={item.Name}
                        key={index}
                      >
                        {item.Name}
                      </option>
                    ))}
                  </datalist>
                  <input
                    type="text"
                    name="name"
                    value={customer}
                    style={{ textAlign: "center" }}
                    onChange={(e) => setCustomer(e.target.value)}
                  />

                  <input
                    type="text"
                    name="name"
                    value={singleC.Address}
                    style={{ textAlign: "center" }}
                  />
                  <input
                    className="lastinput"
                    type="text"
                    name="name"
                    value={singleC.Contact}
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
              <div className="flex_basis flex_end">
                <div className="form_col lable_col">
                  <label>Salesman:</label>
                  <label>Date:</label>
                  <label>Time:</label>
                  <label className="last_lable">Invoice number:</label>
                </div>
                <div className="form_col">
                  <input
                    type="text"
                    name="name"
                    value={salesman}
                    style={{ textAlign: "center" }}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <input
                    disabled
                    type="text"
                    name="name"
                    value={datetime}
                    style={{ textAlign: "center" }}
                  />
                  <input
                    disabled
                    type="text"
                    name="name"
                    value={time}
                    style={{ textAlign: "center" }}
                  />
                  <input
                    className="lastinput"
                    disabled
                    type="text"
                    name="name"
                    value={invoice}
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
            </form>
            <hr className="dotted" />
          </div>
          <Table
            clearinvoice={clearinvoice}
            clearcurrent={clearcurrent}
            callfunction={callfunction}
            tableSelect={tableSelect}
            setTableSelect={setTableSelect}
            setNetTotal={setNetTotal}
            clickToUnSelectTableRow={clickToUnSelectTableRow}
            setsaveinvoice={setsaveinvoice}
            saveinvoice={saveinvoice}
            Invoice={invoice}
          />
          <div onClick={clickToUnSelectTableRow}>
            <hr className="dotted" />
            <div className="table_buttons">
              <div className="buttons">
                <button
                  className="button_main"
                  onClick={(e) => {
                    savetodatabase(e);
                  }}
                >
                  Save
                </button>
                <button
                  className="button_border "
                  onClick={(e) => {
                    clearinvoice.current();
                  }}
                >
                  Clear
                </button>
                <button
                  disabled={notdelete}
                  className="button_border"
                  onClick={(e) => {
                    clearcurrent.current();
                  }}
                >
                  Delete
                </button>

                <Link to="/">
                  <button className="button_border">Exit</button>
                </Link>
              </div>
              <div className="total">
                <div className="col">
                  <div> Net total</div>
                  <div> Disc</div>
                  <div className="final_total">Total</div>
                </div>
                <div className="col">
                  <div> 0.00</div>
                  <div> 0.00</div>
                  <div className="final_total">
                    {parseFloat(netTotal.toFixed(2))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceTable;
