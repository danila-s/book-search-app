import React from "react";
import './Header.css'
import { getBookList } from '../../api/api'
import { connect } from "react-redux";
import { searchBooks, changeLoading, actualInfo } from '../../redux/actions'



class Header extends React.Component {

    state = {
        categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
        sortingArr: ['relevance', 'newest'],
        string: '',
        focusCategory: '',
        sorting: 'relevance',
        totalItems: 0
    }


    changeInput = (e) => {
        this.setState({ string: e.target.value })
    }

    actualInfo = () => {
        const { string, focusCategory, sorting } = this.state;
        const arr = [string, focusCategory, sorting];
        this.props.actualInfo(arr);
    }

    getNewBooks = () => {

        const { string, focusCategory, sorting } = this.state
        const { startIndex, results } = this.props
        this.props.changeLoading();
        getBookList(string, focusCategory, sorting, startIndex, results)
            .then(data => {
                this.setState({ totalItems: data.totalItems })
                this.props.searchBooks(data.items)
                this.actualInfo();
                this.props.changeLoading();
            }).catch(err => {
                console.log(err);
                alert('Что-то пошло не так , обновите страницу.');
            })
    }

    newCategory = (e) => {
        if (e.target.value === 'all') {
            this.setState({ focusCategory: '' }, this.getNewBooks)
        } else {
            this.setState({ focusCategory: e.target.value }, this.getNewBooks)
        }
    }

    newSorting = (e) => {
        if (this.state.string) {
            this.setState({ sorting: e.target.value }, this.getNewBooks)
        } else {
            this.setState({ sorting: e.target.value })
        }
    }


    render() {
        const { categories, totalItems, sortingArr } = this.state
        return (
            <header>
                <p className="title" href='/hello'>Search for books</p>
                <div className="input-container">
                    <div className="border-of-input">
                        <svg width="18" className="search-pic" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.getNewBooks}>
                            <path d="M17 17L12.0962 12.0962M12.0962 12.0962C13.2725 10.9199 14 9.29493 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C9.29493 14 10.9199 13.2725 12.0962 12.0962Z" stroke="#768298" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input placeholder="Найти..." onChange={this.changeInput} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                this.getNewBooks();
                            }
                        }} />
                    </div>
                </div>
                <div className="selects">
                    <div className="select">
                        <p className="select-title">Categories</p>
                        <select onChange={this.newCategory}>
                            {categories.map((item, index) => {
                                return <option value={item} key={index}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className="select">
                        <p className="select-title">Sorting by</p>
                        <select onChange={this.newSorting}>
                            {sortingArr.map((item, index) => {
                                return <option value={item} key={index}>{item}</option>
                            })}
                        </select>
                    </div>
                </div>
                <p className="items">{totalItems}</p>
            </header>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    searchBooks: (data) => dispatch(searchBooks(data)),
    changeLoading: () => dispatch(changeLoading()),
    actualInfo: (info) => dispatch(actualInfo(info))
});

const mapStateToProps = (state) => {
    return {
        booksArr: state.booksArr,
        startIndex: state.startIndex,
        results: state.results
    };
};

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Header);