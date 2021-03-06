'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YouTubeButton = function (_React$Component) {
  _inherits(YouTubeButton, _React$Component);

  function YouTubeButton(props) {
    _classCallCheck(this, YouTubeButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YouTubeButton).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(YouTubeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var youtubebutton = _reactDom2.default.findDOMNode(this.refs.youtubebutton);
      var youtubescript = document.createElement('script');
      youtubescript.src = 'https://apis.google.com/js/platform.js';
      youtubebutton.parentNode.appendChild(youtubescript);

      this.initialized();
    }
  }, {
    key: 'initialized',
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        ref: 'youtubebutton',
        className: 'g-ytsubscribe',
        'data-channel': this.props.channel,
        'data-layout': this.props.layout,
        'data-theme': this.props.theme,
        'data-count': this.props.count
      });
    }
  }]);

  return YouTubeButton;
}(_react2.default.Component);

YouTubeButton.PropTypes = {
  channel: _react.PropTypes.string.isRequired,
  layout: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  count: _react.PropTypes.string
};
exports.default = YouTubeButton;