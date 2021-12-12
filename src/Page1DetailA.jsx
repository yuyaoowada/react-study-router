import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>ページ1詳細Aです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
