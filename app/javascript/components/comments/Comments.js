import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    render() {

        const { comments, articleId, deleteComment } = this.props;
        const associatedComments = comments.filter(comment => comment.restaurantId === articleId);

        const commentList = associatedComments.map((comment, index) => {
            return <Comment key={index} comment={comment} deleteComment={deleteComment} />
        })

        return (
            <div>
                <ul>
                    {commentList}
                </ul>
            </div>
        );
    }

};

export default Comments;