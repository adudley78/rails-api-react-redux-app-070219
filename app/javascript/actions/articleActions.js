import React from "react"
// import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { List } from 'semantic-ui-react';

const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

function getArticles() {
    console.log('getArticles() Action!!')
    return dispatch => {
        dispatch({ type: GET_ARTICLES_REQUEST });
        return fetch(`v1/articles.json`)
            .then(response => response.json())
            .then(json => dispatch(getArticlesSuccess(json)))
            .catch(error => console.log(error));
    };
};

export function getArticlesSuccess(json) {
    return {
        type: GET_ARTICLES_SUCCESS,
        json
    };
};

class articlesList extends React.Component {
    render() {
        const { articles } = this.props;
        const articlesList = articles.map((article) => {
            return (
                <List.Item key="article">
                    <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a'>{article.name}</List.Header>
                        <List.Description as='a'>{article.guid}</List.Description>
                    </List.Content>
                </List.Item>
            );
        })
        return (
            <React.Fragment>
                Greeting: {this.props.greeting}
                <button className="getArticlesBtn" onClick={() => this.props.getArticles()}>getArticles</button>
                <br />
                <ul>{articlesList}</ul>
            </React.Fragment>
        );
    }
}

const structuredSelector = createStructuredSelector({
    articles: state => state.articles,
});

const mapDispatchToProps = { getArticles };

export default connect(structuredSelector, mapDispatchToProps)(articlesList);
