import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from '../../../axios';
import './Posts.css';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatePosts = posts.map(post => {
          return {
            ...post,
            author: 'Wenderson'
          };
        });
        this.setState({
          posts: updatePosts
        });
      })
      .catch(error => {
        console.log(error);
        // this.setState({
        //   error: true
        // });
      });
  }

  postSelectedHandler = postId => {
    this.setState({ selectedPostId: postId });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/posts/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + '/:id'}
          component={FullPost}
          exact
        />
      </div>
    );
  }
}

export default Posts;
