import React, {Component} from 'react'

class Counter extends Component {
    // This is a controlled object
    // What is going to be rendered in the VirtualDOM
    // Use curly brackets if you're going to use JS expression and render values dinamically
    // React.Fragment acts as a div to wrap two adjacent elements. This is because Babbel can't convert elements next to each other
    // this.props.children require to render children elements of an specific instance of the component
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server 
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount")
    }
    render() {
        console.log("Counter - Rendered")

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes
    }

    formatCount() {
        const {value} = this.props.counter 
        return value === 0 ? "Zero" : value 
    }
}

// <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
// In order to render a list, we run over the entire array using Map. It's possible to create elements within the JS code. 
// Each list item requires the "key" attribute in order for React to react to changes in the VirtualDOM. Its value must be unique
// for elements in that specific list.

// It is possible to use "style" attribute to customize the element. You need to create an
// object containing CSS properties in cammelCase format and pass it dinamically to the "style" attribute of the element
//styles = {
//    fontSize: 10,
//    fontWeight: "bold"
//}
// <element style={ this.styles }

// component attributes, such as adresses, age, etc.
// props you pass values INTO the component. You can't update it and it won't re render the VirtualDOM
// state you change it within the component. It renders in the DOM

// constructor() {
//     super() // Component class constructor
//     this.handleIncrement = this.handleIncrement.bind(this)
// }

// obj.method() -> "this" will always reference an instance of this object
// function() --> "this" will reference the "window" object

export default Counter