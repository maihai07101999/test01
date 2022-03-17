import {Component} from 'react';

class Sort extends Component {
  constructor(props){
    super(props);
    this.state ={

    };
    this.handleSort= this.handleSort.bind(this);
   
  }
  handleSort(orderBy, orderDir) {
    console.log("");
  }
  render(){
    let orderBy = this.props.orderBy;
    let orderDir =this.props.orderDir;
   console.log(orderBy+" "+orderDir)
  return (
    <div>
       
       
          {/* SORT : START */}
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
          Sort by
                  <option value={1}>Name ASC</option>
                  <option value={2}>Name DESC</option>
                  <option value={1}>Level ASC</option>
                  <option value={2}>Level DESC</option>
       </select>
			</div>
          {/* SORT : END */}
    </div>
 
  );
  }
}

export default Sort;
