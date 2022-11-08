import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  console.log(query.get('name'));

  return (
    <div>
      <h1>URL Parameterページです</h1>
      <p>id: { id }</p>
    </div>
  );
}
