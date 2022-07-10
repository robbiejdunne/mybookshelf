import React from "react";

class Footer extends React.Component {
   render() {
     return (
   <p className='pb-7 ...'>App created by Robert Dunne using React. ©️{(new Date().getFullYear())}</p>
   )
}
};

export default Footer;