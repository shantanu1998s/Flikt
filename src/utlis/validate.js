  
export function validateData(email, password, name,cPassword){
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Eamil is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!name) return "Please Enter your Name"
    if(password!==cPassword) return "Password Not Match"

    return null;
}