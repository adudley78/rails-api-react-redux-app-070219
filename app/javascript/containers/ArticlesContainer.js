// connect to Redux and pass the appropriate props down to its children
import React, { Component } from 'react';
import ArticleInput from '../components/articles/ArticleInput'
import Articles from '../components/articles/Articles'
import { connect } from 'react-redux'

class ArticlesContainer extends Component {
    render() {
        return (
            <div>
                <ArticleInput addArticle={this.props.addArticle} />
                <Articles
                    articles={this.props.articles}
                    deleteArticle={this.props.deleteArticle}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({ articles: state.articles })

const mapDispatchToProps = dispatch => ({
    addArticle: text => dispatch({ type: 'ADD_ARTICLE', text }),
    deleteArticle: id => dispatch({ type: 'DELETE_ARTICLE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)
