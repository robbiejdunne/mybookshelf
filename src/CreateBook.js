import React from "react";

class CreateBook extends React.Component {
    categoryRef = React.createRef();
  
    goToCategory = event => {
      event.preventDefault();
      console.log(this.categoryRef.current.value);
    };
    render() {
      return (
      <React.Fragment>
        <p>Example types: 'fiction', 'non-fiction', 'history', 'business'</p>
        <div className="movie-container">
            <label> Pick a category: </label>
            <form>
            <select onChange={this.goToCategory} ref = {this.categoryRef} id="movie">
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Sport</option>
              </select>
            </form>
            </div>
        <br/>
      </React.Fragment>
      )
    }
  };

  export default CreateBook;