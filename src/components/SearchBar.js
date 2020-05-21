import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.term);
        this.props.onSearchBarSubmit(this.state.term); // we reference the props object with "this" when it's a class based component
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;