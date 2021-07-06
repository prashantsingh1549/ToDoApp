import React, { Component } from 'react'

export default class MyForm extends Component {
    state = {
        user: {
            title: this.props.editUser[0].title,
            body: this.props.editUser[0].body
        }
    }
    valueChanged = (e) => {
        const { currentTarget: input } = e
        const data = { ...this.state.user }
        data[input.name] = input.value
        this.setState({ user: data })
    }
    render() {
        const { user } = this.state
        
        return (
            <div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title"> Title</label>
                        <input type="text" onChange={this.valueChanged} className="form-control" value={user.title} name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Description</label>
                        <input type="text" onChange={this.valueChanged} className="form-control" value={user.body} name="body" />
                    </div>
                    <button className="btn btn-primary" onClick={() => { this.props.callBack(user) }}>Save Data</button>
                </form>
            </div>
        )
    }
}
