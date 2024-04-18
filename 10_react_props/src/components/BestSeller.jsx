import React from "react";
import bookImg from "../assets/book.png";

export default function BestSeller(props) {
  const { tytle, authour, type } = props;
  return (
    <>
      <div className="best_seller">
        <div className="book">오늘 뭐 읽지 ?</div>
        <img src={bookImg} style={{ width: 300, borderRadius: "5px" }} alt="" />
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="book_content">저자: {props.author}</div>
          <div className="book_content">판매가: {props.price}원</div>
          <div className="book_content">구분: {props.type}</div>
        </div>
      </div>
    </>
  );
}
