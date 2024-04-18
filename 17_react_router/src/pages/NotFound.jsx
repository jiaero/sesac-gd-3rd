import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <>
    <h1>이 주소는 잘못된 경로입니다</h1>
    <button onClick={() => navigate('/')}>홈으로</button>
    </>
  )
}
