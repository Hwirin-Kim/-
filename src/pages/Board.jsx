import React from "react";
import { styled } from "styled-components";
import BoardList from "../components/board/BoardList";
//번호 제목 작성자 작성일

const obba_list = [
  {
    no: 1,
    title: "우리오빠들",
    author: "남궁은",
    date: "2023-01-01",
    image: "https://www.m-i.kr/news/photo/202301/978518_741152_5729.jpg",
  },
  {
    no: 2,
    title: "오빠들 하이",
    author: "남궁은",
    date: "2023-01-01",
    image: "https://www.m-i.kr/news/photo/202112/882099_650594_5445.jpg",
  },
  {
    no: 3,
    title: "오빠들 해위",
    author: "남궁은",
    date: "2023-01-01",
    image:
      "https://i.namu.wiki/i/jN9glk7dlm5EM-x_UVdDKPIFP8FWTaKVo4uXFV7_4-tpXdRUJLOMynCN-wQ9CA_9ndLj1bWpbWrjS3RS1p3hBw.webp",
  },
  {
    no: 4,
    title: "오늘 뭐먹지",
    author: "남궁은",
    date: "2023-01-01",
    image:
      "https://dimg.donga.com/wps/NEWS/IMAGE/2022/11/04/116313417.1.edit.jpg",
  },
  {
    no: 5,
    title: "오빠들 짱짱맨",
    author: "남궁은",
    date: "2023-01-01",
    image:
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/08/18/a9bf1e28-58a2-45d1-989d-656baefccd9e.jpg",
  },
];

export default function Board() {
  return (
    <StContainer>
      <StTitle>오빠들 게시판</StTitle>
      <BoardList list={obba_list} />
    </StContainer>
  );
}

const StContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StTitle = styled.h1`
  font-size: 30px;
`;
