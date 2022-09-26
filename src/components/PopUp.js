import React from "react";
// import axios from "axios";

  async function deleteCustomer(ID) {
    try{
    fetch(`http://localhost:9000/customers/deleteCustomer/${ID}`, {
      method: "DELETE",
    });

    }
    catch(err){
      return err;
    }
  }

const PopUp = ({ customerId, close ,getCustomerData}) => {
   
   if (!customerId.id) return null;
  return (
    <div onClick={close.id} >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div >
         
          <div>
            <p>Do you want to delete the customer {customerId.id}?</p>
          </div>
          <div className="btnContainer">
            <button  onClick={() => {deleteCustomer(customerId.id);close();getCustomerData()}}>
              DELETE
            </button>
            <button  onClick={close}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUp;