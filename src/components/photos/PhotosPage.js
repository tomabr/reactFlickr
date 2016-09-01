import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as photosActions from '../../actions/photosActions';

class PhotosPage extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  photoRow(photo, index){
    const url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
              '/' + photo.id + '_' + photo.secret + '_q' + '.jpg';
    return <img key={index} src={url}/>;
  }

  render() {
    return (
      <div>
          {this.props.photos.map(this.photoRow)}
      </div>
    );
  }
}

PhotosPage.propTypes = {
  photos: PropTypes.array
};

function mapStateToProps(state, ownProps){
  return{
    photos: state.photos
  };
}

export default connect(mapStateToProps)(PhotosPage);

