import React, {Component} from 'react'

class AddMovie extends Component {
    state = {

    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            content: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Add New Movie</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddMovie