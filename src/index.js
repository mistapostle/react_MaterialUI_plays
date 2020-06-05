import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard  from './Dashboard.js'

function App() {
  /*
  const style={
    margin:'20px' 
};
  return (
    <React.Fragment>
    <CssBaseline />
    <div style={style}>
    <Button variant="contained" color="primary">
      你好，世界
    </Button>
    </div>
    </React.Fragment>
  );
  */

  return (
    <Dashboard></Dashboard>

  )
} 
ReactDOM.render(<App />, document.querySelector('#app'));   
