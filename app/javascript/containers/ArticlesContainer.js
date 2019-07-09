import React, { Component } from 'react';
import ArticleInput from '../components/articles/ArticleInput';
import { connect } from 'react-redux';

export class ArticlesContainer extends Component {
    render() {
        return (
            <div>
                <ArticleInput />
            </div>
        )
    }
}

export default ArticlesContainer
