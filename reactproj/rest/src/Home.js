import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import facebook1 from "./images/facebook.jpg"
import instagram1 from "./images/download.jpg"
import twitter1 from "./images/twitter.png"
import div3burger1 from "./images/burgerdiv3.jpg"
import cooka from "./images/cook1.jpg"
import cookb from "./images/cook2.jpg"
import cookc from "./images/cook3.jpg"
import burger4 from "./images/burger.jpg"
import ger1 from "./images/burgerdiv3.jpg"
import ger2 from "./images/burgerdiv3.jpg"
import ger3 from "./images/burgerdiv3.jpg"



function Home(){
    const [a, seta] = useState("");
    function data(){
      var db = "Mayank"
      seta(db)
    }
    useEffect(()=>{
      data();
    },[])

    const[b,setb] = useState("");
    const[c,setc] = useState("");
    const[d,setd] = useState("");
    const[e,sete] = useState("");
    const[f,setf] = useState("");
    const[g,setg] = useState("");
    const[h,seth] = useState("");
    const[i,seti] = useState("");
    function myform(e){
      e.preventDefault();
      var data= new FormData(e.currentTarget);
      var n = data.get("name");
      var em = data.get("email");
      var p = data.get("password");
      var cn1 = data.get("tel");
      var cn2 = data.get("tel2");
      var ti = data.get("time");
      var da = data.get("date");
      var na = data.get("number");

      setb(n);
      setc(em);
      setd(p);
      sete(cn1);
      setf(cn2);
      setg(ti);
      seth(da);
      seti(na);

    }
   

    return(
        <>
        <Navbar/>
        <div className="div1">
           
              <h1 className="hoh1">Get Cashback<br/>up to 50%<br/></h1>

                 <p className="hop1" >lorem ipsum dolor sit amet, constructor<br/>
                 ad pisching elit. Suspended consequtive<br/>
                 justo eu nunc consecutor.
                </p>
                <div className="btn1">
                <button className="btn btn-default btn-lg btna ">Order Now</button>
                </div>
         
         </div>
         <div className="container div2">
            <h1 className="hoh2">Our Chef</h1>
            <p className="hop2">Lorem ipsum dolor sit ammet constructor and piscing edit vi.<br/>
               vamus lacina odio vestibum vestibulum
            </p>
            <div class="col-lg-4">
              <img src={cooka} class="image-responsive img-circle"/>
               <h1 className="imgh1">AIDEN HUNTER</h1>
               <p className="imgp1">Founder</p>
            </div>
            <div className="col-lg-4">
            <img src={cookb} class="image-responsive img-circle"/>
            <h1 className="imgh1">ETHEL RAMSEY</h1>
               <p className="imgp1">Co-Founder</p>
             </div>
             <div className="col-lg-4">
            <img src={cookc} className="image-responsive img-circle"/>
            <h1 className="imgh1">FANNIE STEWART</h1>
               <p className="imgp1">Co-Founder</p>
             </div>


         </div>

      <div className="Container d1">
         <div className="col-lg-4 div3">
         <img src={div3burger1} className="img-responsive img-circle "/>
         </div>
         
         <div className="div32 col-lg-8">
            <h1 className="hoh3">Best Burger</h1>
            <p className="hop3">Lorem ipsum dolor sit ammet consector<br/>
            adjacent edit. Virnamus lacina olio virtue<br/>
            vesrbulum vestbulump.
            </p>
            <div className="div33">
            <button className="btn btn-default btn-lg btn31">Order Now</button>
            </div>
         </div>
      </div>

      <div className="Container d4">
         <div className="col-lg-4">
         <h1 className="hoh4">Big Burger</h1></div>
         <div className="col-lg-8">
            <img src={burger4} className="image-responsive img-circle "/>
         </div>
         </div>
         <div className="Container col-lg-12 din">
      <div className="col-lg-4 div41">
          <div className="c41">
            <img src={ger1} className="img-responsive img-circle"/>
            <h1 className="div420">$10.00</h1>
            <p className="div421">lorem ipsum doler sit amet<br/>
             consequtoer adjacency wait
            </p>
            <div className="btnth3">
            <button className="btn btn-default btn-lg btn3r">Order Now</button>
             </div>
         
      
      </div>
      </div>
      <div className="col-lg-4 div41">
      <div className="c42">
            <img src={ger2} className="img-responsive img-circle"/>
            <h1 className="div420">$10.00</h1>
            <p className="div421">lorem ipsum doler sit amet<br/>
             consequtoer adjacency wait
            </p>
            <div className="btnth3">
            <button className="btn btn-default btn-lg btn3r">Order Now</button>
             </div>
          </div>
      </div>
      <div className="col-lg-4 div41">
      <div className="c43">
      <img src= {ger3} className="img-responsive img-circle"/>
            <h1 className="div420">$10.00</h1>
            <p className="div421">lorem ipsum doler sit amet<br/>
             consequtoer adjacency wait
             
            </p>
            <div className="btnth3">
            <button className="btn btn-default btn-lg btn3r">Order Now</button>
             </div>
            
           </div>
            
         
      </div>
      </div>

   
        
<div className=" div5">
   <p className="hop5">Lorem ipsum dolor amet, consectetur<br/>
   adipiscing elit. Vivamus lacinia odio vitae<br/>
   vestibulum vestibulum.</p>

   <h1 className="hoh5">Barry Henderson</h1>
</div>
   
<div className="Container div6">
   <h1 className="hoh6">Don't miss Our Update</h1>
   <p className="hop6">Lorem ipsum dolor sit ameit.connector adpisiorcing clit.<br/>
    Vivamus lacina odio vivat vestrinyum vrsetrinum.
   </p>
<div className=" col-lg-8">
   <table className="table">
      <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Password</th>
               <th>Calling Number</th>
               <th>Whatsapp Number</th>
               <th>Calling Time</th>
               <th>Date of Birth</th>
               <th>Age</th>
            </tr>
      </thead>
      <tbody>
         <tr>
            <td>{b}</td>
            <td>{c}</td>
            <td>{d}</td>
            <td>{e}</td>
            <td>{f}</td>
            <td>{g}</td>
            <td>{h}</td>
            <td>{i}</td>
         </tr>
      </tbody>
   </table>
   </div>
   <div className=" col-lg-4">
      <form onSubmit = {myform}>
      <div className="form-group">
      <input type="text" name="name" className="form-control" placeholder="Enter Your Name"/>
      </div>
      <div className="form-group">
      <input type = "email" name="email" className="form-control" placeholder="Fill Your Email"/>
      </div>
      <div className="form-group">
         <input type = "password" name="password" className="form-control" placeholder="Enter Your Password"/>
      </div>
      <div className="form-group">
         <input type= "tel" name="tel1" className="form-control" placeholder="Enter Your Calling Number"/>
      </div>
      <div className="form-group">
         <input type = "tel" name="tel2" className="form-control" placeholder="Enter Your Whatsapp Number"/>
      </div>
      <div className="form-group">
         <input type ="time" name="time" className="form-control" placeholder="Enter preferred time for calling you"/>
      </div>
      <div className="form-group">
         <input type = "date" name="date" className="form-control" placeholder="Enter Your Date of birth"/>
      </div>
      <div className="form-group">
         <input type ="number" name="number" className="form-control" placeholder="Enter Your age"/>
      </div>
      <button className="btn btn-danger" type="submit">Submit Data</button>
      </form>
    
    

</div>
</div>

<div className="Container div7">
   <div className="col-lg-3">
      <h1>Title Here</h1>
      <p>Lorem ipsum dolor sit amet, constructor<br/>
       adcacency elit. Aliredser at dignissim nunc,<br/>
       id maximum ex,. Etiam nec dignissim elit, at<br/>
       dignisim enim.
      </p>
      <div className="Container col-lg-4 div71">
      <li><a href="https://www.facebook.com/"><img src={facebook1} /></a></li>
      <li><a href="https://www.instagram.com/"><img src={instagram1}/></a></li>
      <li><a href="https://twitter.com/"><img src={twitter1}/></a></li> 
</div>
   </div>
   <div className="col-lg-3">
      <h1>About</h1>
      <li><a href="">History</a></li>
      <li><a href="">Our Team</a></li>
      <li><a href="">Brand Guildlines</a></li>
      <li><a href="">Terms&Condition</a></li>
      <li><a href="">Privcy Policy</a></li>
   </div>
   <div className="col-lg-3">
      <h1>Services</h1>
      <li><a href="">How to Order</a></li>
      <li><a href="">Our Product</a></li>
      <li><a href="">Order Staus</a></li>
      <li><a href="">Promo</a></li>
      <li><a href="">Payment Method</a></li>
   </div>
   <div className="col-lg-3">
      <h1>Other</h1>
      <li><a href="">Contact Us</a></li>
      <li><a href="">Help</a></li>
      <li><a href="">Privacy</a></li>
   </div>

 </div>









        </>
    )
}

export default Home;