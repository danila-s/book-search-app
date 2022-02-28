import React from "react";
import './Header.css'
import {getBookList} from '../../api/api'
import { connect } from "react-redux";
import {searchBooks , focus , changeLoading , actualInfo} from '../../redux/actions'



class Header extends React.Component{

    state = {
        categories : ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
        sortingArr : ['relevance' , 'newest'],
        string : '',
        focusCategory :'',
        sorting : 'relevance',
        totalItems : 0
    }

    changeInput = (e) => {
        this.setState({string : e.target.value})
    }

    actualInfo = () => {
        const {string , focusCategory , sorting} = this.state;
        const arr = [string , focusCategory , sorting];
        this.props.actualInfo(arr);
    }

    getNewBooks = () => {
        
        const {string , focusCategory , sorting} = this.state
        const {startIndex , results} = this.props
        this.props.changeLoading();
        console.log(string , focusCategory , sorting ,startIndex , results )
        getBookList(string , focusCategory , sorting , startIndex , results) 
        .then(data => {
            this.setState({totalItems : data.totalItems})
            this.props.searchBooks(data.items)
            this.props.focus('');
            this.actualInfo();
            this.props.changeLoading();
        }).catch(err => {
            console.log(err);
            alert('Что-то пошло не так , обновите страницу.');
        })
        
        
    }

    newCategory = (e) => {
        if(e.target.value === 'all'){
            this.setState({focusCategory : ''} ,this.getNewBooks )
        }else {
            this.setState({focusCategory : e.target.value} ,this.getNewBooks )
    }
    }

    newSorting = (e) => {
        if(this.state.string){
            this.setState({sorting : e.target.value} ,this.getNewBooks )
        }else {
            this.setState({sorting : e.target.value})
        }
    }
   

    render(){
        const{categories , totalItems , sortingArr} = this.state
        return(
            <header>
                <p className="title">Search for books</p>
                <div className="search-container">
                    <input type="search" onChange={this.changeInput } onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        this.getNewBooks();
                        }
                    }}/>
                    <button onClick={this.getNewBooks}></button>
                </div>    
                <div className="selects">
                    <div className="select">
                        <p className="select-title">Categories</p>
                        <select onChange={this.newCategory}>
                            {categories.map((item , index) => {
                                return <option value={item} key={index}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className="select">
                        <p className="select-title">Sorting by</p>
                        <select onChange={this.newSorting}>
                            {sortingArr.map((item , index) => {
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
    focus : (id) => dispatch(focus(id)),
    changeLoading : () => dispatch(changeLoading()),
    actualInfo : (info) => dispatch(actualInfo(info))
  });
  
  const mapStateToProps = (state) => {
    return {
      booksArr : state.booksArr,
      startIndex : state.startIndex ,
      results : state.results
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(Header);