import React from "react";

class Header extends React.Component {
    render() {
      return (
          <div>
          <h1 className="text-3xl pt-8 pb-8 pl-3...">Bookshelf 📖</h1>
          <ul className="pr-8 ...">
            <li className='underline decoration-sky-500'><a href="/">Home</a></li>
            <li className='underline decoration-sky-500'><a href="http://robbiejdunne.github.io">My site</a></li>
            </ul>
        </div>
        )
    }
};

export default Header;