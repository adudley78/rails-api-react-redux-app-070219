import React, { Component } from 'react';

class CommentInput extends Component {
    state = {
        text: ''
    };

    handleOnChange = event => {
        this.setState({
            text: event.target.value,
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addComment({ text: this.state.text, articleId: this.props.articleId });
        this.setState({
            text: '',
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <label>Add Comment</label>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
};

export default CommentInput;
