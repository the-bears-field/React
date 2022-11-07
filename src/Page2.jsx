import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <p>Page2ページです</p>
      <Link to="/page2/999">URL Parameter</Link>
    </div>
  );
}
