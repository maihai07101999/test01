import './App.css';
import {Component} from 'react';
import Control from './Components/Control';
import Table from './Components/Table';
import List from './Components/List';
// import task from './Mock/tacks'
import  { filter, includes, orderBy as remove, reject } from 'lodash';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      ishowTable: false,
      strSearch: '',
      oderBy: '',
      orderDir: '',
      itemSelect : null
    };
    this.handleToggleForm =this.handleToggleForm.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleSearchGo = this.handleSearchGo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
   

  }
  handleDelete(id){
   let items = this.state.items;

   remove(items, (item)=>{
     return item.id === id;
   });
   this.setState({
      items : items
   });
    localStorage.setItem('task', JSON.stringify(items));
  }
  handleSubmit(item){
    let {items} = this.state;
    let id = null;
    if(item.id !== '')
    {
      items = reject(items, { id : item.id});
        id= item.id;
    }
    else
    {
      id = uuidv4();
    }
    items.push({
      id : id,
      name: item.name,
      level: +item.level
    })
     this.setState({
      items: items,
      ishowTable: false
    });
    localStorage.setItem('task', JSON.stringify(items));
  }
  handleToggleForm(){
    this.setState({
      ishowTable: true,
      itemSelect: null
    });
  }
  handleCancel(){
    this.setState({
      ishowTable: false 
    });
  }
  handleEdit(item){
    this.setState({
      itemSelect: item, // itemselect cos theer thay đổi khi click vào các item khác nhau.
      ishowTable: true  
    })
  }
  handleSearchGo(value){
    this.setState({
      strSearch: value
    });
  }
  componentWillMount(){
     let items = JSON.parse(localStorage.getItem('task'));
    this.setState({
      items: items,
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
  let itemSelect = this.state.itemSelect;
  if(ishowTable){
    elmTable = <Table 
    itemSelect = {itemSelect}
    handleSubmitN= {this.handleSubmit}
    onclickCancle={this.handleCancel} />;
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
    items = filter(itemsOrigin, (item) =>{
      return includes(item.name, Search);
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
       <List
       handleEditl={this.handleEdit}
        handleDeleteBo={this.handleDelete}
        items={items}/>
        </div>
  );
  }
}

export default App;
