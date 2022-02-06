import React from 'react';
import Header from './layout/Header';
import 'react-tabs/style/react-tabs.css';
import Body from "./layout/Body";

const App: React.FC = () => (
    <div style={{margin: 0}}>
        <Header />
        <Body/>
    </div>
);

export default App;
