import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle as farCheckCircle, faCheckSquare as farCheckSquare, faCircle as farCircle, faSquare as farSquare, faTimesCircle as farTimesCircle} from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faCalculator, faCheckCircle, faCheckSquare, faChevronDown, faCircle, faInfoCircle, faNotesMedical, faSquare, faTimesCircle, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor (props, context) {
        super (props, context);

        library.add(faNotesMedical);
        library.add(faCalculator);
        library.add(faAngleDoubleLeft);
        library.add(faAngleDoubleRight);
        library.add(faUserMd);
        library.add(faChevronDown);
        library.add(faCheckCircle);
        library.add(faTimesCircle);
        library.add(faSquare);
        library.add(faCircle);
        library.add(faCheckSquare);
        library.add(faInfoCircle);

        library.add(farCheckCircle);
        library.add(farTimesCircle);
        library.add(farSquare);
        library.add(farCircle);
        library.add(farCheckSquare);
    }

    render () {
        return (
            <h1>Testing</h1>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(App);
