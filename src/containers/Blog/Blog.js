import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'; // NavLink rada beda dengan Link, soalnya otomatis nambah class="active"

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {    
    render () {        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts/" 
                                    exact
                                    activeClassName="my-active" // di DOm bakal jadi: class="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: 'underline'
                                    }}
                                    >Posts</NavLink></li>
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
                <Switch> {/*supaya stop lookup pas udah ketemu path new-post*/}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/posts" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;