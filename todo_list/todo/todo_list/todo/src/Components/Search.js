import {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      strSearch: ''
    };
    this.handleSearch= this.handleSearch.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClear= this.handleClear.bind(this);
  }
  handleClear(){
    this.setState({
      strSearch: ''
    });
    this.props.handleGo('')
  }
  handleSearch(){
    this.props.handleGo(this.state.strSearch)
  }
  handleChange(event){
    this.setState({
      strSearch: event.target.value
    });
  }
  render(){

   
  return (
    <div> 
          {/* SEARCH : START */}
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
              <input type="text" value={this.state.strSearch} onChange={this.handleChange} className="form-control" ref="search" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-info" onClick={this.handleSearch} type="button">Go!</button>
                <button className="btn btn-warning" onClick={this.handleClear} type="button">Clear</button>
              </span>
            </div>
          </div>
          {/* SEARCH : END */}
    </div>
 
  );
  }
}

export default Search;
