import React from 'react';

class SearchBar extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    state = {term : ''};

    onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.term);
        this.props.onButtonSubmit(this.state.term)   // when we are in function based component we no need to use this.props.onButtonSubmit
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="search" placeholder="Search your car here" onChange={this.onInputChange}/> */}
                        <input type="search" placeholder="Search your car here" 
                            value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}/>
                    </div>
                </form >
            </div>
        );
    }
    
}

export default SearchBar;

