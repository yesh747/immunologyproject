/**
 * Created by Yesh on 4/23/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import TwitterAPI from 'twitter';


class Twitter extends Component {
		constructor(props) {
				super(props);

				this.state = {
						posts: []
				};
		}

		componentWillMount() {

				var client = new TwitterAPI({
						consumer_key: process.env.TWITTER_CONSUMER_KEY,
						consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
						access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
						access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
				});

				client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
						console.log(tweets);
				});
		}

		render() {
				return (
						<div>
								<h1>Trending Twitter</h1>
						</div>
				);
		}
}

export {Twitter}