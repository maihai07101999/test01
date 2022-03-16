import {Component} from 'react';
import '../App.css';
class List extends Component {
  render(){
    const items =this.props.items;
    const elm = items.map((item, index) =>{
      let elmLever = <span class="label label-default">small</span>;
      if(item.lever === 1){
        elmLever = <span class="label label-danger">medium</span>;
      }
      else if(item.lever === 2){
        elmLever = <span class="label label-info">high</span>;
      } 
     return (  
        <tr>
          <td class="text-center">{index}</td>
          <td>{item.task}</td>
          <td class="text-center">{elmLever}</td>
          <td>
              <button type="button" class="btn btn-warning">Edit</button>
              <button type="button" class="btn btn-danger">Delete</button>
          </td>		
        </tr>
     );
    });

  return (
    <div >
       <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Task</th>
                <th style={{width: '20%'}} className="text-center">Level</th>
                <th style={{width: '20%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
             {elm}
              
            </tbody>

          </table>
        </div>
          
    
    </div>
 
  );
}
}

export default List;
