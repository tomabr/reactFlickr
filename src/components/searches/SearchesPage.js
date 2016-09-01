import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as searchActions from '../../actions/searchActions';

class SearchesPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      search: {searchTerm: ''}
    };

  this.onTitleChange = this.onTitleChange.bind(this);
  this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const search = this.state.search;
    search.searchTerm = event.target.value;
    this.setState({search: search});
  }

  onClickSave(){
    this.props.dispatch(searchActions.createSearch(this.state.search));
    this.props.dispatch(searchActions.searchText(this.state.search.searchTerm));
  }


  render() {
    return (
      <div>
        <h1>search</h1>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.search.searchTerm}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

SearchesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searches: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    searches: state.searches
  };
}

export default connect(mapStateToProps)(SearchesPage);

