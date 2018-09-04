import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.renderGridLayout = this.renderGridLayout.bind(this);
  // }

  static propTypes = {
    onLayoutChange: PropTypes.func,
    layout: PropTypes.object.isRequired
  };

  static defaultProps = {
    onLayoutChange: function () { },
  };

  renderGridLayout(layout) {

    return layout.map((item) => (
      <Card key={item.i} style={{ background: item.bgcolor }}>
        <CardText>
          {item.name}
        </CardText>
      </Card>
    ));
  }

  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = getLayoutsFromSomewhere();
    return (
      <ResponsiveGridLayout {...this.props} layouts={layouts}>
        {this.renderGridLayout(layout)}

      </ResponsiveGridLayout>
    )
  }
}

export default MyResponsiveGrid;
