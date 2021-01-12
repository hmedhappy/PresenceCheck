import React from 'react'

export default function Person({element}) {
    return (
        <>
        <div id='results' className="card card-body mb-1">
            <div id="row" className="row">
                <div className="col-md-9">
                    <h6 style={{marginBottom:0}}>
                        {element.name}
                    </h6>
                </div>
                <div className="col-md-3">
                    <a className="btn btn-secondary">
                       {element.status}
                    </a>
                </div>
            </div>
      </div>
        </>
    )
}
