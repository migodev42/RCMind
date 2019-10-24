import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@context';


function App(props) {
    return (
        <Provider>
            <div>App</div>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));

export default App;