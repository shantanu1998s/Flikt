import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../redux/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const user= useSelector((store) => store.user.user);

  const get_name=localStorage.getItem("name");
  console.log(user)
  const handleSignOut=()=>{
    dispatch(toggleState())
  }
  console.log("hello")

  return (
   
  <div className="flex justify-between border border-black text-center h-16">
    <div className="flex mt-4 text-lg font-bold "> 
     <h1 className=" ">Flikt Technology</h1>
     <h1 className="ml-2 text-lg font-bold text-red-700 ">🕉Radhe Radhe🙏</h1>
    </div>{
         
     user && <button
      className="hover:text-white text-black mr-5 bg-red-700 my-3 px-4 py-2  rounded-full  "
      onClick={handleSignOut}
    >
     {get_name[0].toUpperCase()}
    </button>
    }
   
  </div>
  );
}

export default NavBar;
