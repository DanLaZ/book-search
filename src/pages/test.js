import React, {Component} from 'react';

//Components
// import Wrapper from '../components/Wrapper/Wrapper';
import NavBar from '../components/Navbar/Navbar';
import SearchedBook from '../components/SearchedBook/SearchedBook';
import SavedBook from '../components/SavedBook/SavedBook';
import Footer from '../components/Footer/Footer';




class Test extends Component {

    render() {
  
      return (
        <div>
          <NavBar/>
          <div className="grid-parent">
            <SearchedBook/>
            <SavedBook/>
            <SearchedBook/>
            <SavedBook/>
            <SearchedBook/>
            <SavedBook/>
            <SearchedBook/>
            <SavedBook/>
            <SearchedBook/>
            <SavedBook/>
            <SearchedBook/>
            <SavedBook/>
          </div>
          <Footer/>
        </div>
      );
  
    }

}
  
  
export default Test;