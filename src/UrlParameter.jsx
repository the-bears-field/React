import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>URL Parameterページです</h1>
      <p>id: { id }</p>
    </div>
  );
}