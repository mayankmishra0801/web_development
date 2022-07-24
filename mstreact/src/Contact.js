import React, {useState} from "react";
import Navbar from './Navbar';



function Contact(){

    function abc(e){
        e.preventDefault(); // stop refresh

        var data = new FormData(e.currentTarget); // form data with get

        var name = data.get('name');
        var email = data.get('email');
        var password = data.get('password');
        var MobileNumber  = data.get('MobileNumber');
        var message = data.get('message');
        var Pincode = data.get('Pincode');
        var Address = data.get('Address');
        var file = data.get('Good file');
        var Ifile = data.get('Iamge File');

        console.log(name);
        console.log(email);
        console.log(password);
        console.log(MobileNumber);
        console.log(message);
        console.log(Pincode);
        console.log(Address);
        console.log(file);
        console.log(Ifile)
        

        // e.target.reset();

    }

    return(
        <div>
            <Navbar/>
            <h2>Contact Us</h2>
            <section className="col-lg-4">
                <form method="post" action="" onSubmit={abc}>
                       <div className= "form-group">
                           <input type = "text" className="form-control" name = "name" required placeholder = "Name*" data-form-field = "Name"/>
                       </div> 
                       <div className= "form-group">
                           <input type = "email" className= "form-control" name = "email" required placeholder = "Email*" data-form-field = "Email"/>
                        </div>
                        <div className = "form-group">
                            <input type = "password" className="form-control" name = "password" required placeholder = "Password*" data-form-field = "Password"/>
                        </div>
                        <div className = "form-group">
                              <input type = "number" className= "form-control" name = "MobileNumber" required placeholder = "MobileNumber*" data-form-field = "MobileNumber"/>
                        </div>
                        {/* <div className = "form-group">
                              <input type="radio" name="gender" value="male"> Male
                               <input type="radio" name="gender" value="female"> Female

                        </div> */}
                        <div className = "form-group">
                            <input type = "number" className = "form-control" name = "Pincode" required placeholder = "Pincode*" data-form-field = "Pincode"/>
                        </div>
                        <div className = "form-group">
                               <textarea className="form-control" name = "Address" placeholder = "Address" rows = "5" data-form-field = "Address"></textarea>
                        
                        </div>
                        <div className="form-group">
                            <input type = "file" className="form-control" name = "file" reuired placeholder = "Enter Required file*" data-form-field = "Good file"/>
                        </div>
                        <div className="form-group">
                            <input type = "file" className="form-control" name = "Image File" reuired placeholder = "Fill Your Image*" data-form-field = "Image File"/>
                        </div>


                        <div className= "form-group">
                            <textarea  className="form-control" name = "message" placeholder = "Message" rows = "7" data-form-field = "Message"></textarea>
                        </div>
                        <div className="form-group">
                            <input type='submit' value="Add" className="btn btn-success" />
                        </div>
                        

                </form>
            </section>
        </div>
    )
}

export default Contact;
