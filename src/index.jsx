import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import Provider from '@context'
import Nav from '@containers/Nav'
import Main from '@containers/Main'

const App = (props) => {

    return (
        <Provider>
            <Nav />
            <Main />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;