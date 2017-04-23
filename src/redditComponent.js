/**
 * Created by Yesh on 4/11/17.
 */
import React, { Component } from 'react';
import axios from 'axios';


class Reddit extends Component {
		constructor(props) {
				super(props);

				this.state = {
						posts: []
				};
		}

		componentDidMount() {
				axios.get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
						.then(res => {

								console.log(res);

								const posts = res.data.data.children.map(obj => obj.data);
								this.setState({ posts });
						});
		}

		render() {
				return (
						<div>
								<h1>{`Reddit Reads ${this.props.subreddit}`}</h1>
								<ul>
										{this.state.posts.map(post =>
												<li key={post.id}>
														<a href={post.url}>{post.title}</a>
														<span> &nbsp;&nbsp; by {post.author}</span>
												</li>
										)}
								</ul>
						</div>
				);
		}
}

export {Reddit}