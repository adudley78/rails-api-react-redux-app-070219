import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageArticles(state = {
    articles: [],
    comments: [],
}, action) {
    switch (action.type) {

        case 'ADD_ARTICLE':

            const article = { text: action.text, id: cuidFn() };
            return {
                ...state,
                articles: [...state.articles, article]
            }

        case 'DELETE_ARTICLE':
            const articles = state.articles.filter(article => article.id !== action.id);
            return { ...state, articles }

        case 'ADD_COMMENT':

            const comment = { text: action.comment.text, articleId: action.comment.articleId, id: cuidFn() };
            return {
                ...state,
                comments: [...state.comments, comment]
            }

        case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id);
            return { ...state, comments }

        default:
            return state;

    }
};