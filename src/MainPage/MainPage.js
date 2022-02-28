import React from 'react'
import Header from '../components/Header/Header'
import {connect} from 'react-redux'
import Books from '../Books/Books'
import './MainPage.css'



class MainPage extends React.Component {

    render () {
        const {booksArr , isLoad} = this.props
        
        return (
            <div>
              {isLoad ?  <div className='loading'>
                <p className='loading-text'>Loading ...</p>
              </div> : <></>}
                <Header />
                    <Books
                    booksArr = {booksArr}
                    />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    
  });
  
  const mapStateToProps = (state) => {
    return {
      booksArr: state.booksArr,
      isLoad : state.isLoad
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(MainPage);