import axios from "axios";
//create the functions to use with axios here and import them into each component.

const BASE_URL = "https://kp-nc-news.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

// export const getArticleById = async () => {
//   const { id } = this.props;
//   const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
//   return data.article;
// };
