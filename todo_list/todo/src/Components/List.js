import {Component} from 'react';
import '../App.css';
class List extends Component {
  constructor(props){
    super(props);
    this.state ={};
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(id){
    this.props.handleDeleteBo(id)
  }
  handleEdit(item){
    this.props.handleEditl(item)
  }
  render(){
    
    const items =this.props.items;
    const elm = items.map((item, index) =>{
      let elmLever = <span class="label label-default">small</span>;
      if(item.level === 1){
        elmLever = <span class="label label-danger">medium</span>;
      }
      else if(item.level === 2){
        elmLever = <span class="label label-info">high</span>;
      } 
     return (  
        <tr>
          <td class="text-center">{index}</td>
          <td>{item.name}</td>
          <td class="text-center">{elmLever}</td>
          <td>
              <button type="button" onClick={()=> this.handleEdit(item)} class="btn btn-warning">Edit</button>
              <button type="button" onClick={()=> this.handleDelete(item.id)} class="btn btn-danger">Delete</button>
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
