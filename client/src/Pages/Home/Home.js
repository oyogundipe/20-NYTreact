import React, { Component } from 'react';
import API from './../../utils/API';
import Article from './../../Components/Article';

class Home extends Component  {
    state = {
       articles: [], 
       q: "",
       start_year: "",
       end_year: "",
    }

    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
    }

    //methods will be listed here
    getArticles= () => {
        API.getArticles({
            q: this.state.q,
            state_year: this.state.start_year,
            end_year: this.state.end_year
        })
        .then(res => 
            this.setState({
                articles: res.data,
            })
        )
        .catch(err => console.log(err));
    }
    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => this.getArticles());
    }

    getSavedArticles = () => {
        API.getSavedArticles()
        .then(res =>
        this.setState({
                savedArticles: res.data
            })
            )
            .catch(err => console.log(err));
        }


    render() {
        return (
            <div>
            <p>This is the list of all the articles
            (wow, so kewl)</p>
            {this.state.articles.map(article => (
            <Article
                key={article._id}
                _id={article._id}
                title={article.headline.main}
                url={article.web_url}
                date={article.pub_date}
                handleClick={this.handleArticleSave}
                buttonText="Save Article"
                />
            
            ))}
                <p>Saved Articles</p>
                {this.state.savedArticles.map(article => (
                    <Article
                        key={article._id}
                        _id={article._id}
                        title={article.title}
                        buttonText="Delete Article"
                        />
                ))}
            </div>
        )
    }
};

export default Home;