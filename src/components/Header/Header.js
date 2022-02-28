import React from "react";
import './Header.css'
import {getBookList} from '../../api/api'
import { connect } from "react-redux";
import {searchBooks , focus} from '../../redux/actions'


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

    getNewBooks = () => {
        
        const {string , focusCategory , sorting} = this.state
        getBookList(string , focusCategory , sorting) 
        .then(data => {
            this.setState({totalItems : data.totalItems})
            this.props.searchBooks(data.items)
            this.props.focus('')
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
        const{categories , sorting , totalItems , sortingArr} = this.state
        return(
            <header>
                <p className="title">Search for books</p>
                <input onChange={this.changeInput}/> 
                <button onClick={this.getNewBooks}></button>
                <div className="selects">
                    Categories<select onChange={this.newCategory}>
                        {categories.map((item , index) => {
                            return <option value={item} key={index}>{item}</option>
                        })}

                    </select>
                    Sorting by<select onChange={this.newSorting}>
                        {sortingArr.map((item , index) => {
                            return <option value={item} key={index}>{item}</option>
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
    focus : (id) => dispatch(focus(id))
  });
  
  const mapStateToProps = (state) => {
    return {
      booksArr : state.booksArr
    };
  };
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(Header);