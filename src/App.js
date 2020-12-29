    import React from 'react'
    import {BrowserRouter as Router , Route  } from 'react-router-dom'
    import Sidebar from './Sidebar'
    import Main from './Main'
    import './App.css';

    function App() {
    return (
    <div className="wrapper">
        <Router>
            <Sidebar />
            <Route path='/' component={Main} />
            </Router>
    </div>
    );
    }

    export default App;
