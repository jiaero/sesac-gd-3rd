import { Link } from "react-router-dom";

export default function ProductItem({ prod }) {
  return (
    <>
      <div>
        {/* http://localhost:3000/product/id 로 이동 */}
        <Link to={"/products/" + prod.id}>상세페이지로 이동</Link>
        <div>상품명 : {prod.name}</div>
        <div>상세 설명 : {prod.body}</div>
      </div>
    </>
  );
}
