import {Component} from 'react';

class Sort extends Component {
  constructor(props){
    super(props);
    this.state ={

    };
    this.handleSort= this.handleSort.bind(this);
   
  }
  handleSort(orderBy, orderDir) {
    console.log(orderBy + " " + orderDir);
    console.log("hello");
  }
  render(){
    let orderBy = this.props.orderBy;
    let orderDir =this.props.orderDir;
    let strSort = orderBy + " " + orderDir;
  return (
    <div>
       
       
          {/* SORT : START */}
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
          Sort by
                  <option onClick={()=>this.handleSort('name', 'asc')} >Name ASC</option>
                  <option  onClick={()=>this.handleSort('name', 'desc')} >Name DESC</option>
                  <option   onClick={()=>this.handleSort('level', 'asc')} >Level ASC</option>
                  <option  onClick={()=>this.handleSort('level', 'desc')} >Level DESC</option>
       </select>
       <span className="btn btn-primary">{strSort}</span>
     </div>
          {/* SORT : END */}
    </div>
 
  );
  }
}

export default Sort;
