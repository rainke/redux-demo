// import React, {Component} from 'react';
import Link from './Link';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
const mapStateToProps = (state, props) => ({
    active:props.filter === state.visibilityFilter
  });

const mapDispatchToProps = (dispatch, props) => ({
    onClick(){
      dispatch(setVisibilityFilter(props.filter))
    } 
  });


const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
/*class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    const {filter, children} = this.props;
    const state = store.getState();

    return (
      <Link 
        active={filter === state.visibilityFilter} 
        onClick={() => store.dispatch({
          type:'SET_VISIBILITY_FILTER',
          filter
        })}
      >{children}</Link>
    );
  }  
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}*/
export default FilterLink;