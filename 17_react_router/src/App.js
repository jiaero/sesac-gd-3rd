import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// import Test from "./components/Test";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotoPage from "./pages/PhotoPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* 라우팅 연습 
      <h1>routing !</h1>

      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
      */}

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/1" element={<ProductDetailPage />}></Route>
        <Route path="/photos" element={<PhotoPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
