import React from 'react'
import {connect} from 'react-redux'

const imagePlaceholderUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNW-SjEM9fr4dVJ6KaPzOYL_OMA0obZxa_MA&usqp=CAU'

class App extends React.Component {
    // For React Only have state in App and componentDidMount -> setState({})
    // state = {
    // products []
    //  }


    componentDidMount() {
        // fetchProducts()
    }

    render() {
        // const products = this.state.products //React only
        const products = this.props.products
        
        return (
            <>
            <h1>Hi there!</h1>
            <ul>
                {products.map (p => {
                    return (
                        <li key={p.id}>
                        <h3>{p.title}</h3>
                        <img src={p.image || imagePlaceholderUrl } style={{ maxWidth:  '200px'}} />
                        </li>
                    )
                 }) }
            </ul>
            </>
        )
    }
}

//Fancy pants way
// function mapStateToProps({products}) {
//     return {
//         products,
//     }
// }

function mapStateToProps(globalState) {
    return {
        products: globalState.products,
    }
}

export default connect(mapStateToProps)(App)