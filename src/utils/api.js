import axios from "axios";
//create the functions to use with axios here and import them into each component.

const BASE_URL = "https://kp-nc-news.herokuapp.com/api";

//place your sortby and order by in here
export const getArticles = async (topic, sort_by, order) => {
  //you will need to put in a sortby and orderby in here
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: {
      topic,
      sort_by,
      order
    }
  });
  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);

  return data.topics;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data;
};

export const postComment = async (article_id, username, body) => {
  const newComment = { username, body };
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    newComment
  );
  return data.comment;
};

export const deleteComment = async comment_id => {
  const { data } = await axios.delete(`${BASE_URL}/comments/${comment_id}`);
  return data;
};
