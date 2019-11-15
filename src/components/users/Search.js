import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component{
   state= {
       text:""
   }
   onSubmit(e){
        e.preventDefault();
     if(this.state.text === '' ){
            this.props.setAlert("Please enter value","light")
     }
     else{
        this.props.searchUser(this.state.text);
        this.setState({text:''})
     }
       
   }
   onChange = (e) =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
   static propTypes ={
    searchUser:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired
}
    render(){
   
        return (
          <div>
              <form onSubmit={this.onSubmit.bind(this)} className="form">
            <input value={this.state.text} onChange={this.onChange} type="text" name="text" placeholder="Search User..." />
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
              </form>
              {this.props.showClear && <input type="submit" value="Clear" onClick={this.props.clearUsers} className="btn btn-light btn-block" />}
              
          </div>
        )
    }
}
export default Search;
