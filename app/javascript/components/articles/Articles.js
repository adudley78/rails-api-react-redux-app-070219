import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {

    render() {
        const { articles, deleteArticle } = this.props;
        const articleList = articles.map(article => {
            return (
                <Article
                    key={article.id}
                    article={article}
                    deleteArticle={deleteArticle}
                />
            )
        });

        return (
            <ul>
                Articles
                {articleList}
            </ul>
        );
    }
};

export default Articles;