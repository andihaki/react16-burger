import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'; // NavLink rada beda dengan Link, soalnya otomatis nambah class="active"

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {    
    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active" // di DOm bakal jadi: class="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: 'underline'
                                    }}
                                    >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post", // absolute path
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />}/>
                <Route path="/new-post" render={() => <h1>newpost</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} /> {/* :id = dinamis, bisa diganti selain id */}
            </div>
        );
    }
}

export default Blog;