import {Component} from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  constructor(props){
    super(props);
    this.state={
     
    };
    this.clickAdd= this.clickAdd.bind(this);
  
    
  }
  clickAdd(){
    this.props.onClickAdd();
   
  }
  render(){
    let orderBy= this.props.orderBy;
    let orderDir = this.props.orderDir;
    let elmTable = <button type="button" onClick={this.clickAdd}  class="btn btn-info btn-block">add Task</button>
    if(this.props.ishowTable === true)
    {
      elmTable = <button type="button" onClick={this.clickAdd} class="btn btn-danger btn-block">close Task</button>
    }
  return (
    <div>
       
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <div className="row">
          {/* SEARCH : START */}
         <Search handleGo={this.props.handleSearchGo}/>
          {/* SEARCH : END */}
          {/* SORT : START */}
          <Sort orderBy={orderBy} orderDir={orderDir}/>
          {/* SORT : END */}
          {/* ADD : START */}
          
         
          {elmTable}
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
      
        </div>
    </div>
 
  );
  }
}

export default Control;
