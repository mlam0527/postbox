import React, { Component } from 'react';
import { fetchUpdate } from './store/photo';
import { connect } from 'react-redux';
import PhotoGrid from './GalleryGrid';

class Discover extends Component {
  componentDidMount() {
    this.props.checkUpdate(this.props.currentUser);
  }

  render() {    
    return (
      <PhotoGrid
        numColumns={1}
        photos={this.props.allPhotos}
        checkUpdateDate={(id) => this.props.checkUpdate(id)}
        userId={this.props.currentUser}
      />
    );
  }
}

const mapState = (state) => {
  return {
    allPhotos: state.photo.photos,
    currentUser: state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    checkUpdate: (userId) => dispatch(fetchUpdate(userId)),
  };
};

export default connect(mapState, mapDispatch)(Discover);
