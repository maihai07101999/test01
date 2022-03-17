import {Component} from 'react';

class Table extends Component {
  constructor(props){
    super(props);
     this.state={};
     this.cancelTable= this.cancelTable.bind(this);

  }
  cancelTable(){
    this.props.onclickCancle()
  }
  render(){
    
  return (
    <div >
       
     
        {/* FORM : START */}
       
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form action method="POST" className="form-inline bt">
              <div className="form-group ll ">            
                <input type="text" className="form-control " placeholder="Task Name" ref="task_name" />
              </div>
              <div className="form-group ll">
               
                <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
                  Small
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
                </div>
                <div className="form-group ll">            
                <button type="button" className="btn btn-primary lll">Submit</button>
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
