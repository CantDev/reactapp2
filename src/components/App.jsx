import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './Posts';
import BlogSection from './BlogSection';
import Nav from './Nav';
import BlogBody from './BlogBody';
import BlogBodyCard from './BlogBodyCard'



const App = () => {
    return (
        <Router>
            <Fragment>
                <div className='App'>
                    <Nav />
                    <Switch>
                        <Route path="/Posts/:id" component={BlogBody} />
                        <Route path="/Posts" component={Posts} />

                    </Switch>
                </div>
            </Fragment>
        </Router>
    )
};

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)
export default App