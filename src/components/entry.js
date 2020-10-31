import React from "react";

class Entry extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="card entry">
                {this.props.noBanner !== true && this.props.art !==null && <img src={this.props.art} className="card-img-top" alt="Card Banner"/>}
                <div className="card-body">
                    {this.props.noBanner === true && <img src={this.props.art} alt="Card Image"/>}
                    {this.props.link !== null && <h5 className="card-title"><a href={this.props.link}>{this.props.title}</a></h5>}
                    {this.props.link === null && <h5 className="card-title">{this.props.title}</h5>}
                    <p className="card-text">{this.props.text0}</p>
                    <p className="card-text">{this.props.text1}</p>
                </div>
            </div>
        )
    }
}

export default Entry;