import React from "react";

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
    }

    onInputChange(e) {
        this.setState({
            term: e.target.value
        })  
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => {this.onInputChange(e)}}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;