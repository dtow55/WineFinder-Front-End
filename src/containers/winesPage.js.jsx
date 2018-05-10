import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader } from 'react-bootstrap';
import { loadWines } from '../actions/actions';
import WineList from '../components/wines/wineList.js.jsx';
import WineForm from '../components/wines/wineForm.js.jsx';

class WinesPage extends Component {

  componentDidMount() {
    this.props.loadWines();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Wines
        </PageHeader>
        <WineList wines = {this.props.wines}/>
        <br/>
        <h3>List a New Wine: </h3>
        <WineForm />
        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wines: state.wines
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWines: loadWines
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WinesPage);