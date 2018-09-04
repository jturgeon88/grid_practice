import React from 'react';
import MyResponsiveGrid from './my_responsive_grid';

class Grid extends React.Component {
  render() {
    return (
      <div className="container">
        <MyResponsiveGrid autoSize={true}/>
      </div>
    );
  }
}

export default Grid;
