import React from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getPrints(this.state.value);
    }

    render() {
        return (
            <form className="searchPanel" onSubmit={this.handleSubmit}>
                <label>
                    <input
                        className="searchBar"
                        placeholder="What do you want to build?"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Search" className="searchBtn" />
            </form>
        );
    }
}

export default SearchBar;
