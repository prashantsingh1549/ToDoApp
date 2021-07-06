import React, { Component } from 'react'

export default class MyForm extends Component {
    state = {
        user: {
            title: "" ,
            body: ""
        },
        index:this.props.editUserIndex
        
    }
    valueChanged = (e) => {
        const { currentTarget: input } = e
        const data = { ...this.state.user }
        data[input.name] = input.value
        this.setState({ user: data })
    }
    componentDidMount(){
        if(this.state.index>-1){
            this.setState({user:this.props.editUser[0]});
        }
        else{
            this.setState({user:this.state.user});
        }
    }
    render() {
        const { user } = this.state;
        console.log(this.state.index);
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
