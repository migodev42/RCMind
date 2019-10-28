import React, { useContext } from 'react'
import './index.less'
import { context } from '@context'
import MindMapCanvas from '@components/Canvas'
import * as CONTAINER from '@containers/config'

const Main = (props) => {
    const { theme: { state: themeState } } = useContext(context)

    return (
        <main
            className={CONTAINER.Main}
            style={themeState}>
            <MindMapCanvas />
        </main>
    )
}

export default Main;