// responsible for each article(and contains the button and ID to delete)
import React, { Component } from 'react';
import CommentsContainer from '../../containers/CommentsContainer'

class Article extends Component {

    handleOnClick() {
        this.props.deleteArticle(this.props.article.id);
    }

    render() {
        const { article } = this.props;

        return (
            <div>
                <li>
                    {article.text}
                    <button onClick={() => this.handleOnClick()}> X </button>
                    <CommentsContainer article={article} />
                </li>
            </div>
        );
    }
};

export default Restaurant;
