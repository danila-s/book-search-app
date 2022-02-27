import React from "react";
import './Header.css'
import {getBookList} from '../../api/api'
import { connect } from "react-redux";
import {searchBooks} from '../../redux/actions'


class Header extends React.Component{

    state = {
        categories : ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
        sorting : ['relevance' , 'newest'],
        string : '',
        totalItems : 0
    }

    changeInput = (e) => {
        this.setState({string : e.target.value})
    }

    getNewBooks = () => {
        const {string} = this.state
        getBookList(string)
        .then(data => {
            this.setState({totalItems : data.totalItems})
            this.props.searchBooks(data.items)
        })
    }

    render(){
        const{categories , sorting , totalItems} = this.state
        return(
            <header>
                <p className="title">Search for books</p>
                <input onChange={this.changeInput}/> 
                <button onClick={this.getNewBooks}></button>
                <div className="selects">
                    Categories<select>
                        {categories.map((item , index) => {
                            return <option key={index}>{item}</option>
                        })}

                    </select>
                    Sorting by<select>
                        {sorting.map((item , index) => {
                            return <option key={index}>{item}</option>
                        })}
                    </select>
                </div>
                <p>{totalItems}</p>
            </header>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    searchBooks: (data) => dispatch(searchBooks(data)),
  });
  
  const mapStateToProps = (state) => {
    return {
      booksArr : state.booksArr
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(Header);