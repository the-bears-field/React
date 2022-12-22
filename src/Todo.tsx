export const Todo = (props) => {
  const { title, userId } = props;
  return (
    <p>{`${title}(ユーザ: ${userId})`}</p>
  )
}
