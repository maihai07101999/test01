import {Component} from 'react';

class Sort extends Component {
  render(){
  return (
    <div>
       
       
          {/* SORT : START */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sort by <span className="caret" />
              </button >
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><div role="button">Name ASC</div></li>
                <li><div role="button">Name DESC</div></li>
                <li role="separator" className="divider" />
                <li><div role="button">Level ASC</div></li>
                <li><div role="button">Level DESC</div></li>
              </ul>
              <span className="label label-success label-medium">NAME - DESC</span>
              </div>
         </div>
          {/* SORT : END */}
    </div>
 
  );
  }
}

export default Sort;
