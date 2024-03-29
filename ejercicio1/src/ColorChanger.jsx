import React from 'react';
import './ColorChanger.css';

class ColorChanger extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <div className="color-changer" style={{ backgroundColor: color }}></div>
    );
  }
}

export default ColorChanger;
