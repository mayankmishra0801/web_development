import axios from "axios";
import React from "react";

function Page(){
    var uri = "http://localhost:320/";
function myform(e){
e.preventDefault();
var data = new FormData(e.currentTarget);

var add = {

Name:data.get("name"),
Email:data.get("email"),
Password:data.get("password")
}


axios.post(uri+"add",add).then((succ)=>{
console.log(succ)
if(succ.data=="ok"){

    alert("data added");
}


})


}



return(
<>

<div className="col-lg-5">
    <form onSubmit={myform}>
<div className="form-group">
    <input className="form-control" type="text" name="name"/>
</div>

<div className="form-group">
    <input className="form-control" type="email" name="email"/>
</div>

<div className="form-group">
    <input className="form-control" type="password" name="password"/>
</div>

<button className="btn btn-danger" type="submit">click</button>
    </form>


</div>

</>


)



}

export default Page;