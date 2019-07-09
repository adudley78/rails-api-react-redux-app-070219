import React, { Component } from 'react'

export class ArticleInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            url: '',
            text: ''
        };
    };
    
    render() {
        return (
            <div>
                Add an Article or a Question
                <form>
                    <label>title</label>
                    <input type="text" />
                    <label>url</label>
                    <input type="text" />
                    <label>text</label>
                    <input type="text" />
                </form>
            </div>
        )
    }
}

export default ArticleInput