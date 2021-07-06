import React from 'react'

export default function Todo({ data, indx, callBack, editUserData }) {
    return (
        <div className="card">
            <div className="row p-4">
                <div className="col-10">
                    <h2 className="secondary">{data.title}</h2>
                    <p>{data.body}</p>
                </div>
                <div className="m-auto">
                    <button className="btn-danger btn btn-large" onClick={() => { callBack(indx) }}> Delete</button>
                </div>
                <div className="m-auto">
                    <button className="btn-primary btn btn-large" onClick={() => { editUserData(indx) }}> Edit</button>
                </div>
            </div>
        </div>
    )
}
