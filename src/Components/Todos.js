import React, { Component } from 'react'
import Todo from './Todo'

export default class Todos extends Component {
    render() {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        return (
            <div className="mt-4">
                {users ? users.length === 0 ?
                    <div>No Data found</div> :
                    users.map((item, index) => {
                        return (
                            <div key={index}>
                                <Todo data={item} indx={index} callBack={this.props.callBack} editUserData={this.props.editUserData} />
                            </div>
                        )
                    }) : ""}
            </div>
        )
    }
}
