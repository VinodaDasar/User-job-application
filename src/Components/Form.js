import React from 'react'
import axios from '../config/axios'

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            contact:"",
            applying:"",
            experience:"",
            skills:""
        }
    }

    handleChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
           phone:this.state.contact,
           skills:this.state.skills,
           jobTitle:this.state.applying,
            experience:this.state.experience,
            
        } 
       axios.post('/users/application-form',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
      
       else{
           alert('your application has submitted succcessfully')
           this.setState=({
               name:"",
            email:"",
            contact:"",
            applying:"",
            experience:"",
            skills:""

           })
       }
    })  
        .catch((err)=>{
            alert('err.message')
        })
    }

    render()
    {
        return(
            <div>
                <h2>Apply For Job</h2>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">FullName</label>
                <input type="text"
                id="fullName"
                 name="name"
                  value={this.state.name}
                   onChange={this.handleChange}
                   /><br/>
                   <label htmlFor="email">Email Address</label>
                 <input type="text"
                 id="email"
                 name="email"
                  value={this.state.email}
                   onChange={this.handleChange}
                   placeholder="example@gmail.com"
                   /><br/>
                    <label htmlFor="contact">Contact Number</label>
                 <input type="text"
                 id="contact"
                 name="contact"
                 placeholder="+91 9988554344"
                  value={this.state.contact}
                   onChange={this.handleChange}
                   /><br/>
                   <label>Applying for Job</label>
                   <select name="applying" value={this.state.applying}
                   onChange={this.handleChange}
                   >
                   <option value="">---Select---</option>
                    <option value="Front-End Developer">Front-End Developer</option>
                     <option value="Node.js Developer">Node.js Developer</option>
                      <option value="MEAN Stack Developer">MERN Stack Developer</option>
                       <option valuue="FULL Stack Developer">FULL Stack Developer</option>
                   </select><br/>
                    <label htmlFor="experience">Experience</label>
                 <input type="text"
                 id="experience"
                 name="experience"
                 placeholder="Experience(2years,3months)"
                  value={this.state.experience}
                   onChange={this.handleChange}
                   /><br/>
                    <label>Technical Skils</label>
                <textarea 
                 name="skills"
                  value={this.state.skills}
                   onChange={this.handleChange}
                   placeholder="Technical Skills"></textarea>

                   <br/>
                <input type="submit" value="Send Application"/>

                </form>

            </div>
        )
    }
}

export default Form
 
