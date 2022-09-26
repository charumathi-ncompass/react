export const validation = (input) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!input.ID) {
      errors.id = "ID is required!";
    }
    if (!input.NAME) {
        errors.name = "Name is required!";
      }

    if (!input.EMAIL) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(input.EMAIL)) {
        errors.email = "Invalid email!";
      }

    if (!input.PASSWORD) {
      errors.password = "Password is required";
    } 

    if(!input.CONTACT){
        errors.contact = "contact is required!";
    }
    if(!input.ADDRESS){
      errors.address = "Address is required!";
  }
  
    return errors;
  };




