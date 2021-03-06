import React from 'react';

export default class GREEButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    url: React.PropTypes.string,
    type: React.PropTypes.number,
  };

  render() {
    return (
      <iframe
        src={'http://share.gree.jp/share?url=' + encodeURIComponent(this.props.url) + '&type=' + this.props.type + '&height=20'}
        scrolling="no"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        allowTransparency
        style={{ border: 'none', overflow: 'hidden', width: '80px', height: '20px' }}
      />
    );
  }
}
/* encodeURIComponent */
