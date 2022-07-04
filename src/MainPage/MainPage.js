import React from 'react'
import Header from '../components/Header/Header'
import { connect } from 'react-redux'
import Books from '../Books/Books'
import './MainPage.css'
import { Route, Routes } from 'react-router-dom'
import BookPage from '../BookPage/BookPage'



class MainPage extends React.Component {

  render() {
    const { isLoad } = this.props

    return (
      <div>
        {isLoad ? <div className='loading'>
          <p className='loading-text'>Loading ...</p>
        </div> : <></>}
        <Header />
        <Routes>
          <Route path="/" exact
            element={<Books />}
          />
          <Route path="/book/:id" exact
            element={<BookPage />}
          />
        </Routes>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => {
  return {
    booksArr: state.booksArr,
    isLoad: state.isLoad
  };
};

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(MainPage);