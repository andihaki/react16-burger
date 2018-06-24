import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';
import NoMatch from '../../components/NoMatch/NoMatch';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        let course = this.state.courses.map( course => {
            // console.log(this.props.location.pathname);
            // return <article className="Course" key={course.id}>{course.title}</article>;
            return (
                <Link to={{
                        pathname: this.props.match.url + "/" + course.id,
                        search: '?title=' + course.title
                    }} 
                    key={course.id}>   
                    <article className="Course">{course.title}</article>
                </Link>
            )
            
        } );
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">                    
                    {course}                    
                </section>
                <Route path={this.props.match.url + "/:id"} component={Course}/>
                <Route component={NoMatch} />
            </div>
        );
    }
}

export default Courses;