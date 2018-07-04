import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="dashhead">
          <div className="dashhead-titles">
            <h6 className="dashhead-subtitle">Dashboards</h6>
            <h3 className="dashhead-title">Overview</h3>
          </div>

          <div className="dashhead-toolbar">
            <div className="input-with-icon dashhead-toolbar-item">
              <input type="text" value="01/01/15 - 01/08/15" className="form-control" data-provide="datepicker"/>
              <span className="icon icon-calendar"></span>
            </div>

            <span className="dashhead-toolbar-divider hidden-xs"></span>
            <div className="btn-group dashhead-toolbar-item btn-group-thirds">
              <button type="button" className="btn btn-outline-primary">Day</button>
              <button type="button" className="btn btn-outline-primary active">Week</button>
              <button type="button" className="btn btn-outline-primary">Month</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
