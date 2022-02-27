import React from 'react'
import Header from '../components/Header/Header'
import {connect} from 'react-redux'
import Books from '../Books/Books'


class MainPage extends React.Component {

    render () {
        const booksArr = this.props
        return (
            <div>
            <Header />
            <Books
            booksArr = {booksArr.booksArr}
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
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(MainPage);