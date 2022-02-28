import React,{Component} from "react";

class Employee extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (<>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <div id="container">
                {this.props.data.map( (element) => {
                    
                    return (
                        <div id="data">
                            <h3>{element.count} : {element.name} || {element.dept} || {element.rating} </h3>
                        </div>
                    );
                    })
                }
            </div>
            <button className="back-button" onClick={this.props.backFunc}>Go back</button>
        </>
    )
    }
}

export default Employee;