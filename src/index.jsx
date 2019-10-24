import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@context';
import './index.less'

function App(props) {
    return (
        <Provider>
            <div className="MindMapApp"></div>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));

export default App;