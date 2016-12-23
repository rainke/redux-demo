import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
// class Provider extends Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }

//   render() {
//     return this.props.children;
//   }
// }

// Provider.childContextTypes = {
//   store: React.PropTypes.object
// };

const store = configureStore()

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
