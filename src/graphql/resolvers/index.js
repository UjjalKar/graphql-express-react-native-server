import GraphqlDate from "graphql-date";

import TweetResolvers from "./tweet.resolvers";
import UserResolvers from "./user.resolvers";

export default {
  Date: GraphqlDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
