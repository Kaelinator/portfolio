// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateArticles = `subscription OnCreateArticles(
  $id: ID
  $title: String
  $date: AWSDate
  $subtitle: String
) {
  onCreateArticles(id: $id, title: $title, date: $date, subtitle: $subtitle) {
    id
    title
    date
    subtitle
  }
}
`;
export const onUpdateArticles = `subscription OnUpdateArticles(
  $id: ID
  $title: String
  $date: AWSDate
  $subtitle: String
) {
  onUpdateArticles(id: $id, title: $title, date: $date, subtitle: $subtitle) {
    id
    title
    date
    subtitle
  }
}
`;
export const onDeleteArticles = `subscription OnDeleteArticles(
  $id: ID
  $title: String
  $date: AWSDate
  $subtitle: String
) {
  onDeleteArticles(id: $id, title: $title, date: $date, subtitle: $subtitle) {
    id
    title
    date
    subtitle
  }
}
`;
