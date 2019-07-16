import axios from "axios";
//create the functions to use with axios here and import them into each component.

const BASE_URL = "https://kp-nc-news.herokuapp.com/api";

export const getArticles = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: {
      topic
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
