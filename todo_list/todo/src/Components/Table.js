import {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props);
     this.state={
       task_id: '',
       task_name: '',
       task_level: 0
     };
     this.cancelTable= this.cancelTable.bind(this);
     this.handleChange= this.handleChange.bind(this);
     this.handleSubmit= this.handleSubmit.bind(this);
    

  }
  cancelTable(){
    this.props.onclickCancle()
  }
  handleChange(event){
    const target = event.target;
    const value = event.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){

    let item = {
      id: this.state.task_id,
      name:   this.state.task_name,
      level: this.state.task_level
    }
    this.props.handleSubmitN(item)
    event.preventDefault();

  }
  componentWillMount(){
    let item = this.props.itemSelect;
    if(item.id !== ''){
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_level: item.level
      });
    }
    
  }
  render(){
  
  return (

    <div >
       
     
        {/* FORM : START */}
       
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form onSubmit={this.handleSubmit} action method="POST" className="form-inline bt">
              <div className="form-group ll ">            
                <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control "/>
              </div>
              <div className="form-group ll">
               
                <select name="task_level" value={this.state.task_level} onChange={this.handleChange} id="inputDs" className="form-control">    
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
                </div>
                <div className="form-group ll">            
                <button type="submit" onclickCancle={this.handleSubmit} className="btn btn-primary lll">Submit</button>
                <button type="button" onClick={this.cancelTable} className="btn btn-default lll">Cancel</button>
              
                
              </div>  
            </form>
          </div>
        </div>
        </div>
 
  );
  }
}

export default Table;
