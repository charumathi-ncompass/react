import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { useHistory } from "react-router-dom";
import { CustomerTable } from "./CustomerTable";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [userInput, setUserInput] = useState({
    ID: "",
    NAME: "",
    CONTACT: "",
    EMAIL: "",
    GENDER: "",
    ADDRESS: "",
  });
 
  const history = useHistory();

  useEffect(() => {
    getCustomerData();
  }, []);

  const getCustomerData = async () => {
    try {
      const customers = await fetch(
        "http://localhost:9000/customers/getCustomerDetails",
        {
          method: "GET",
         
        }
      );
      const CustomerData = await customers.json();
      setCustomers(CustomerData);
    } catch (err) {
      return err;
    }
  };

  async function updateCustomer(e) {
    try {
      e.preventDefault();

      const res=await axios.patch(
        "http://localhost:9000/customers/editCustomerDetails",
        userInput,
        { withCredentials: true }
      );

  console.log(res);
      getCustomerData();
    } catch (err) {
      return err;
    }
  }

  const navigateSignup = () => {
    history.push("/CustomerSignup");
  };

  return (
    <>
      <h3>Customer Details</h3>

      <button onClick={()=>navigateSignup()}>Signup</button>
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {customers.length ? (
            customers.map((customer) => (
              <tr key={customer.ID}>

              <CustomerTable
              customer={customer}
              setUserInput={setUserInput}
              updateCustomer={updateCustomer}            
              userInput={userInput}
              customers={customers}
              getCustomerData={getCustomerData}
              />
                  </tr>
             
            ))
          ) : (
            <tr>
              <td>no user found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Customers;
