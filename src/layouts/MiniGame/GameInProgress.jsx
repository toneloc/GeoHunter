import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scanTag } from '../../provider/geohunterContract'
import QRScanner from './QRScanner.jsx'
import MiniGameLevel from './MiniGameLevel.jsx'



class GameInProgess extends Component {

  handleScanId(id){
    let { userData } = this.props;
    scanTag(
      userData._userDid, 
      userData._userName,
      id
    )
  }

  render() {
    return (
      <div>
        <QRScanner scannedObject={(id) => this.handleScanId(id)}/>
        <MiniGameLevel />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    userData: state.user.data,
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(GameInProgess);
