import React, { Component } from 'react';
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'

class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentInput
                    addComment={this.props.addComment}
                    articleId={this.props.article.id}
                />
                <Comments
                    comments={this.props.comments}
                    articleId={this.props.article.id}
                    deleteComment={this.props.deleteComment}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => {
    return { comments }
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({ type: 'ADD_COMMENT', comment }),
    deleteComment: id => dispatch({ type: 'DELETE_COMMENT', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)