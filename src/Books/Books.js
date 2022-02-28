import React from "react";
import Book from "./Book/Book";
import './Books.css'
import { connect } from 'react-redux';
import FocusBook from "./FocusBook/FocusBook";
import { loadMore, changeLoading } from '../redux/actions';
import { getBookList } from '../api/api'


class Books extends React.Component {

    loadMore = () => {
        const { string, focusCategory, sorting, startIndex, results } = this.props;
        this.props.changeLoading();
        getBookList(string, focusCategory, sorting, startIndex + 30, results)
            .then(data => {
                this.props.loadMore(data.items);
                this.props.changeLoading();
            }).catch(err => {
                console.log(err);
                alert('Что-то пошло не так , обновите страницу.');
            })
    }

    render() {
        const { booksArr, focus } = this.props;

        if (focus.length === 0) {
            return (
                <div>
                    <div className="books">
                        {booksArr.map((item, index) => {
                            return <Book
                                bookInfo={item}
                                key={index}
                                index={index}
                            />
                        })}
                    </div>
                    {booksArr.length > 0 && <button className="more-button" onClick={this.loadMore}>Загрузить еще</button>}
                </div>
            )
        } else {
            return (
                <div>
                    <FocusBook
                        book={booksArr[focus]}
                    />
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeLoading: () => dispatch(changeLoading()),
    loadMore: (newBooks) => dispatch(loadMore(newBooks))
});

const mapStateToProps = (state) => {
    return {
        focus: state.focus,
        booksArr: state.booksArr,
        startIndex: state.startIndex,
        results: state.results,
        string: state.string,
        focusCategory: state.focusCategory,
        sorting: state.sorting
    };
};

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Books);