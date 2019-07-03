import React from "react"
// import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

// refactor into actions folder
function getThings() {
  console.log('getThings() Action!!')
  return {
    type: GET_THINGS_REQUEST
  };
};

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>getThings</button>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
