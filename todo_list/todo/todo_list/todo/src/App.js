import './App.css';
import {Component} from 'react';
import Control from './Components/Control';
import Table from './Components/Table';
import List from './Components/List';
import items from './Mock/tacks';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : items,
      ishowTable: false,
      strSearch: '',
      oderBy: 'name',
      orderDir: 'asc'
    };
    this.handleToggleForm =this.handleToggleForm.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleSearchGo = this.handleSearchGo.bind(this);
  }
  handleToggleForm(){
    this.setState({
      ishowTable: !this.state.ishowTable  
    });
  }
  handleCancel(){
    this.setState({
      ishowTable: false 
    });
  }
  handleSearchGo(value){
    this.setState({
      strSearch: value
    });
  }

  render(){
  let itemsOrigin = [...this.state.items];
  let items = [];
  let ishowTable = this.state.ishowTable;
  let elmTable =  null;
  let Search = this.state.strSearch;
  let orderBy = this.state.oderBy;
  let orderDir = this.state.orderDir;
  console.log(orderBy + " "+orderDir)
  if(ishowTable){
    elmTable = <Table onclickCancle={this.handleCancel} />;
  }
  // if(Search.length > 0)
  // {
  //   itemsOrigin.forEach((item) =>{
  //     if(item.task.toLowerCase().indexOf(Search) !== -1){
  //       items.push(item);
  //     }
  //   })
  // }
  // else{ 
  //   items = itemsOrigin;
  // }
    items = _.filter(itemsOrigin, (item) =>{
      return _.includes(item.task, Search);
    });
  return (
    <div className="App">
       
        {/* TITLE : START */}
        <div className="page-header">
          <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
        </div>
        {/* TITLE : END */}
       <Control 
       orderBy={orderBy} orderDir={orderDir}
       onClickAdd ={this.handleToggleForm}
       ishowTable={ishowTable}
       handleSearchGo={this.handleSearchGo}/>
       {elmTable}
       <List items={items}/>
        </div>
  );
  }
}

export default App;
