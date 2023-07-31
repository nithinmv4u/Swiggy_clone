import React from 'react'
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import Body from './components/Body';

const App = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Body/>
        </React.Fragment>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);