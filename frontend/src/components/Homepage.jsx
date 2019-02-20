import React from 'react';

const homePageStyle = {
  display: 'grid',
  gridTemplateColumns: "40px 50px auto 50px 40px",
  gridTemplateRows: "25% 100px auto",
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  position: 'absolute',
  background: '#f8ffff',
  padding: '15px',
};


export default class Homepage extends React.Component {
  constructor(props) {   // state initialization and method binding
    super(props);
    this.state = { 
    }
  }


  render() {
    return (
      <div>
        <h3> Teysha Shoe Measurement System </h3>
      </div>
    );
  }
}
