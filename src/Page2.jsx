import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ2です</h1>
      <Link to="/page2/999">URL Parameter</Link>
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
