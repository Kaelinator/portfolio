// eslint-disable
// this is an auto generated file. This will be overwritten

export const getArticles = `query GetArticles($id: ID!, $date: AWSDate!) {
  getArticles(id: $id, date: $date) {
    id
    title
    date
    subtitle
  }
}
`;
export const listArticles = `query ListArticles(
  $filter: TableArticlesFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      date
      subtitle
    }
    nextToken
  }
}
`;
