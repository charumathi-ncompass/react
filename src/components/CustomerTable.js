import { useState } from "react";
import PopUp from "./PopUp";
export function CustomerTable({updateCustomer,getCustomerData,customer,setUserInput,userInput,customers})
{
    const [popup, setPopup] = useState({
        state:false,
        id:""
    });
    const [customerID, setCustomerID] = useState("");
    
    return (
       <>
                <>
                  {customerID !== customer.ID && (
                    <>
                      <td>{customer.ID}</td>
                      <td>{customer.NAME}</td>
                      <td> {customer.EMAIL}</td>
                      <td> {customer.CONTACT}</td>
                      <td> {customer.GENDER}</td>
                      <td> {customer.ADDRESS}</td>

                      <td>
                      
                        <button
                          id={customer.ID}
                          onClick={(e) => setPopup({state:true,id:e.target.id})}
                        >
                          Delete
                        </button>
                        <PopUp customerId={popup} 
                        getCustomerData={getCustomerData} 
                        close={() => setPopup({state:false,id:""}) } />
                      </td>
                      <td>
                        <button
                          id={customer.ID}
                          onClick={(e) => {
                            setCustomerID(e.target.id);
                            setUserInput({ ...customer });
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </>
                <>
                  {customerID === customer.ID && (
                    <>
                      <td>
                        {customer.ID}
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserInput({ ...userInput, NAME: e.target.value })
                          }
                          defaultValue={customer.NAME}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserInput({
                              ...userInput,
                              EMAIL: e.target.value,
                            })
                          }
                          defaultValue={customer.EMAIL}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserInput({
                              ...userInput,
                              CONTACT: e.target.value,
                            })
                          }
                          defaultValue={customer.CONTACT}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserInput({
                              ...userInput,
                              GENDER: e.target.value,
                            })
                          }
                          defaultValue={customer.GENDER}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={(e) =>
                            setUserInput({
                              ...userInput,
                              ADDRESS: e.target.value,
                            })
                          }
                          defaultValue={customer.ADDRESS}
                        />
                      </td>

                      <td>
                        <button onClick={(e)=>{updateCustomer(e);setCustomerID("")}}>save</button>
                      </td>
                      <td>
                        <button
                          id={customers.ID}
                          onClick={() => setCustomerID("")}
                        >
                          cancel
                        </button>
                      </td>
                    </>
                  )}
                </>
                </>   
    );
}