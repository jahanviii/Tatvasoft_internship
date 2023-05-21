import { useNavigate } from "react-router-dom";

const Apple=()=>{
  const Navigate=useNavigate();
  const onHomePage=()=>{
     Navigate("/");
  };
  return(
<div>
<h2>Apple Page</h2>
<button onClick={onHomePage}>Navigate to Home</button>
</div>
);
};
export default Apple;
