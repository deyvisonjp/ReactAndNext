import { Component } from "react";

import "./style.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 10,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPage, allPosts, posts } = this.state;
    const nextPage = page + postPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPost);

    this.setState({ posts, page: nextPage });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchValue: value });
    console.log(value);
  };

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter(post => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        {/* Se tiver pesquisa não aparece h1 */}
        {!!searchValue && <h1>Search Value: "{searchValue}"</h1>}
        <TextInput searchValue={searchValue} handleChange={this.handleChange} />

        {/* Se não tiver pesquisa */}
        {!searchValue && (
          <div className="button-container">
            <Button
              textButton="Load more posts"
              click={this.loadMorePosts}
              disabled={noMorePosts}
            />
          </div>
        )}

        <Posts posts={filteredPosts} />
      </section>
    );
  }
}
export default Home;
