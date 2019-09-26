import React, {Component} from 'react';

import axios from 'axios';

//Components
// import Wrapper from '../components/Wrapper/Wrapper';
import NavBar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import Footer from '../components/Footer/Footer';


class SearchPage extends Component {

  state = {
    search: "",
    books: [],
    
  };

  onSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const search = {
      search: this.state.search
    }


    console.log(search);

    // axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    //   .then(res => console.log(res.data));

    // this.setState({
    //   search: ''
    // })


  }

  
  
  


    render() {
  
      return (
        <div>
          <NavBar/>
          <form onSubmit={this.onSubmit}>
            <SearchBar
            search={this.search}
            handleInputChange={this.onSearch}
            handleSearchBooks={this.handleSearchBooks}
            />
          </form>
          <Footer/>
        </div>
      );
  
    }
}
  
  
export default SearchPage;