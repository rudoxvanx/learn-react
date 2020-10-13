import React,{ Component } from 'react';

export default class Form extends Component{
    initialState = {
        name:'',
        job:''
    }

    handleChange = (e) =>{
        const { name,value } = e.target

        this.setState({
            [name]:value,
        });
    }

    state = this.initialState

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const { name , job } = this.state;

        return(
            <form>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}/>
                  <label htmlFor="job">Job</label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  value={job}
                  onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        );
    }
} 