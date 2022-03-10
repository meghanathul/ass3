import React, {Component} from "react";
import "./index.css";
import Employee from "./Employee";

export class Form extends Component {


   constructor(props){
       super(props)
       this.state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        addemp:1,
        user:[]
        };
   }


    handleChange = (event) => {
        console.log('onchange')
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    onFormClick = () => {
        console.log('form click')
        this.setState({clicked:!this.state.clicked})
    };
    //when we click on back button this function is called

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited")
        let temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            addemp:this.state.addemp
        };

        this.state.user.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            addemp:this.state.addemp +1
        }); 
    } 
    

    render(){
        return(
            <div id="form">
                {!this.state.clicked ? 
                <>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                        <label htmlFor="name">Name :</label>
                        <input  type="text" id="name" value={this.state.value} name="name" handleChange={this.handleChange}/>
                        <br />
                        <label  htmlFor="dept">Department :</label>
                        <input  type="text" name="dept" value={this.state.value} id="dept" handleChange={this.handleChange}/>
                        <br />
                        <label  htmlFor="rate">Rating :</label>
                        <input type="number" id="rate" value={this.state.value} name="rating" handleChange={this.handleChange}/>
                        <br />
                        <button  type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </form>
                </> : 
                    <Employee data={this.state.user} backFunc={this.onFormClick} />
                    }
            </div>
        )
    }
}