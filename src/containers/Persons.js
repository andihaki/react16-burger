import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersons} />
                {this.props.peoples.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePersons(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        peoples: state.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPersons: () => dispatch({ type: actionType.ADD_PERSON}),
        onRemovePersons: (id) => dispatch({ type: actionType.REMOVE_PERSON, id: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);