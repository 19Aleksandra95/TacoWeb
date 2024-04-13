import React, { Component } from 'react';
import axios from 'axios';

import { StyledAppWithRequests } from './AppWithRequest.styled';
import Loader from './Loader/Loader';

/* Praca z JSON Placeholder /get /post etc */

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },

/* TWORZYMY KOMENTARZE */
// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }

export default class AppWithRequest extends Component {
  /* najpierw projektujemy state */
  state = {
    posts: null, // jeżeli wiesz ze bedzie to masyw można dac [] w innym wypadku to bedzie null
    isLoading: false, //zawsze ma byc false
    error: null,
    selectedPostId: null,
    comments: null,
  };
  /* Piszemy funkcje dla naszego zapytania sieciowego GET */
  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      /* tutaj zwracamy się do axios (tą bibliotekę wykorzystujemy w tym projekcie) */
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      /* trzeba teraz to wstanowic w state */
      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  /* TWORZYMY LOGIKĘ DLA KOMENTARZY */
  fetchPostsComments = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      /* tutaj zwracamy się do axios (tą bibliotekę wykorzystujemy w tym projekcie) */
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
      );
      /* trzeba teraz to wstanowic w state */
      this.setState({
        comments: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onSelectPostId = postId => {
    this.setState({
      selectedPostId: postId,
    });
  };

  /* piszemy kod dla fetchPosts aby uruchomił się podczas pierwszego renderu  AppWithRequest */
  componentDidMount() {
    /* jeżeli nie ma w fetchPosts "return" nie trzeba pisac await */
    this.fetchPosts();
  }

  /*Umowa dla wyskakujacych komentarzy po kliknięciu danego materiału */
  componentDidUpdate(_, prevState) {
    if (prevState.selectedPostId !== this.state.selectedPostId) {
      this.fetchPostsComments();
    }
  }

  render() {
    return (
      <StyledAppWithRequests>
        <h1>HTTP-request</h1>
        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured.. Error message {this.state.error}
          </p>
        )}
        {/* Piszemy tą umowe jeżeli internet jest wolny aby użytkownik widział ze strona się łąduje (wykorzystujemy react spinners) */}
        {this.state.isLoading && <Loader />}
        <div className="listWrapper">
          <ul className="postList">
            {/* Wykorzystując map zawsze w state przy posts musi byc [], przy null nie wykorzystujemy map albo zmieniamy umowe zapytu */}
            {this.state.posts !== null &&
              this.state.posts.map(post => {
                return (
                  <li
                    key={post.id}
                    onClick={() => this.onSelectPostId(post.id)}
                    className="postListItem"
                  >
                    <h2 className="itemTitle">{post.title}</h2>
                    <p className="itemBody">
                      <b>Body:</b> {post.body}
                    </p>
                  </li>
                );
              })}
          </ul>
          {/* Tworzymy kod dla komentarzy */}
          <ul className="commentsList">
            {this.state.selectedPostId !== null && (
              <li className="commentsListItem">
                Selected post id: {this.state.selectedPostId}
              </li>
            )}
            {/* !this.state.is Loading && - umowa do tego aby komentarze ładowały się */}
            {!this.state.isLoading &&
              this.state.comments !== null &&
              this.state.comments.map(comments => {
                return (
                  <li key={comments.id} className="commentsListItem">
                    <h2 className="commentName">Name: {comments.name}</h2>
                    <h3 className="commentEmail">Email: {comments.email}</h3>
                    <p className="commentBody">
                      <b>Body:</b> {comments.body}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </StyledAppWithRequests>
    );
  }
}
