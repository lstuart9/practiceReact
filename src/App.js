import React, {Component} from 'react'
import heart from './heart.jpg'


class App extends Component {
    render() {
        return (
            <div className={App}>
                <h1>Howdy there don't break</h1>
                <img src={heart} alt={"heart"}/>
            </div>
        )
    }
}

export default App