import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )
    
}

export default SearchBar;


// ----- Using class components ----------
// class SearchBar extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             term: ""
//         }
//     }

//     onInputChange(e) {
//         this.setState({
//             term: e.target.value
//         })  
//     }

//     onSearchSubmit = (e) => {
//         e.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//     }

//     render(){
//         return (
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={this.onSearchSubmit}>
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" value={this.state.term} onChange={(e) => {this.onInputChange(e)}}/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchBar;