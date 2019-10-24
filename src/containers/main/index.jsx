import React, { useContext } from 'react'
import './index.less'
import { context } from '@context'

const Main = (props) => {
    const { theme: { state: themeState } } = useContext(context)

    return (
        <main
            className="RCMind-Main"
            style={themeState}>
        </main>
    )
}

export default Main;