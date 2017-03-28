import React, { Component } from 'react';
import { pageChange } from '../constants_actioncreators/groups';
import { addToGroup } from '../constants_actioncreators/layout';
import { connect } from 'react-redux';


const mapSTP = state => ({
  currentId: state.get('pages').get('currentPage'),
  elements: state.get('boxes').toJS(),
  groupId: state.get('pages').get('group'),
  pages: state.get('pages').get('pages'),
});

const mapDTP = dispatch => ({
  addGroup(stateCopy, groupId, currentId) {
    dispatch(addToGroup(stateCopy, groupId, currentId));
  },
  changePage(elements, currentId, pageNo) {
    dispatch(pageChange(elements, currentId, pageNo));
  },

});
const PageTabs = (props) => {
  const pageArr = props.pages;

  return (<div>
    <button className="fakeTab TrendHandMade other borders" onClick={() => { props.addGroup(props.elements, props.groupId, props.currentId); }}> Add Page +</button>
    { pageArr.map(page => (<button onClick={() => { props.changePage(props.elements, props.currentId, page); }}key={page} className="fakeTab active bkoffwhite TrendHandMade borders">Page {page}</button>)) }
  </div>
  );
};

export default connect(mapSTP, mapDTP)(PageTabs);