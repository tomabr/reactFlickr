// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Photos from './photos/PhotosPage';
import Searches from './searches/SearchesPage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Searches/>
        <Photos/>
      </div>
    );
  }
}

export default App;
