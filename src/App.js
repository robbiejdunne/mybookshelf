import React from "react";
import AllBooks from "./AllBooks";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Header/>
      <AllBooks/>
      <Footer/>
    </React.Fragment>
    )
  }
};

export default App;