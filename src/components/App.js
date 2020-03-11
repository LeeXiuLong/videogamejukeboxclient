import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameCreate from './games/GameCreate';
import GameDelete from './games/GameDelete';
import GameEdit from './games/GameEdit';
import GameList from './games/GameList';
import GameShow from './games/GameShow';
import Header from './Header';
import Home from './Home';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/games/all" exact component={GameList} />
                    <Route path="/games/new" exact component={GameCreate} />
                    <Route path="/games/delete" exact component={GameDelete} />
                    <Route path="/games/edit" exact component={GameEdit} />
                    <Route path="/games/show" exact component={GameShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;