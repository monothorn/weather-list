import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        //fetch data
        this.props.fetchWeather(this.state.term);
        this.setState({'term': ''});
    }

    render() {
        return (
            <form
                onSubmit={this.handleFormSubmit}
                className="input-group">
                <input
                    placeholder="Get forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.handleInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);