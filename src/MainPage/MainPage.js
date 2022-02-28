import React from 'react'
import Header from '../components/Header/Header'
import {connect} from 'react-redux'
import Books from '../Books/Books'
import { BrowserRouter } from 'react-router-dom';


class MainPage extends React.Component {

    render () {
        const booksArr = this.props
        return (
            
            <div>
                <Header />
                <BrowserRouter>
                    <Books
                    booksArr = {booksArr.booksArr}
                    />
                </BrowserRouter>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    
  });
  
  const mapStateToProps = (state) => {
    return {
      booksArr: state.booksArr,
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(MainPage);