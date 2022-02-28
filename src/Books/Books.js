import React from "react";
import Book from "./Book/Book";
import './Books.css'
import {connect} from 'react-redux';
import FocusBook from "./FocusBook/FocusBook";

class Books extends React.Component {

    render () {
        const {booksArr , focus} = this.props;
        
        if(focus.length === 0){
        return(
            <div className="books">
                {booksArr.map((item , index) => {
                    return <Book 
                    bookInfo = {item}
                    key = {index}
                    index = {index}
                    />
                })}
            </div>
        )}else {
            return (
                <div>
                    <FocusBook 
                    book = {booksArr[focus]}
                    />     
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    
});

const mapStateToProps = (state) => {
  return {
    focus: state.focus,
    booksArr: state.booksArr
  };
};

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Books);