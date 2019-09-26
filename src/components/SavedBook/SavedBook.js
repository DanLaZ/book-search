import React from 'react';
import "./savedBook.css";

class SavedBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render (){
    return (
      <div className="dl-card-container" >
          
      <div className="book-img">
        <img src={this.props.image} alt={this.props.title}></img>
      </div>

      <div>
        <h2 className="book-title ">{this.props.title}</h2>
        <h2 className="book-author">{this.props.author}</h2>
        <p className="book-description">{this.props.description}</p>
      </div>

        <div className="button-center">
          <button className="button-style" buttonClick={this.props.buttonClick} id={this.props.id}>Delete</button>
          <button className="button-style"><a href={this.props.link} target="blank" rel="Hello">Book Link</a></button>
        </div>

      </div>          
    )
  }
}

export default SavedBook