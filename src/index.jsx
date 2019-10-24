import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import Provider from '@context'
import Nav from '@containers/nav'
import Main from '@containers/main'

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