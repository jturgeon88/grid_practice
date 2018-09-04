import React from 'react';
import MyResponsiveGrid from './my_responsive_grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const layoutData = require('../data/data.json');
const layoutConfig = require('../data/layout-config.json');

class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid layout={layoutData} {...layoutConfig} />
      </MuiThemeProvider>
    );
  }
}

export default Home;
