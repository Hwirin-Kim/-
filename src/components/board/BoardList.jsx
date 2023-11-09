import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const table_header = ["번호", "제목", "작성자", "작성일"];

export default function BoardList({ list }) {
  const navigation = useNavigate();
  const onClickHandler = (no, item) => {
    navigation(`/board/${no}`, { state: item });
  };
  return (
    <StTable>
      <StThead>
        <StTr>
          {table_header.map((item, index) => (
            <StTh key={index}>{item}</StTh>
          ))}
        </StTr>
      </StThead>
      <StTbody>
        {list.map((item) => (
          <StTr
            key={item.no}
            $isBody={true}
            onClick={() => onClickHandler(item.no, item)}
          >
            <StTd>{item.no}</StTd>
            <StTd>{item.title}</StTd>
            <StTd>{item.author}</StTd>
            <StTd>{item.date}</StTd>
          </StTr>
        ))}
      </StTbody>
    </StTable>
  );
}

const StTable = styled.table`
  border: 1px solid rgb(229 231 235);
  border-collapse: collapse;
`;
const StThead = styled.thead``;
const StTbody = styled.tbody``;
const StTr = styled.tr`
  border-bottom: 1px solid rgb(229 231 235);
  ${({ $isBody }) =>
    $isBody &&
    `&:hover {
    background-color: #fafafa;
    cursor: pointer;
  }`}
`;
const StTh = styled.th``;
const StTd = styled.td`
  text-align: center;
`;
