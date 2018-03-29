import '../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header.jsx';
import {Main} from "./main.jsx";
import {Footer} from "./footer.jsx";

class App extends React.Component {
    render() {
        return <div className='container'>
           <Header/>
            <Main/>
            <Footer/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )

})