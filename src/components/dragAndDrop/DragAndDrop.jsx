import { useRef, useState } from "react";
import { styled } from "styled-components";
const DragAndDrop = ({ list, setList }) => {
  const dragItemIndex = useRef(null);
  const dragOverItemIndex = useRef(null);

  // 드래그를 시작할 때 실행되는 이벤트
  const dragStart = (e, index, id) => {
    console.log("시작");
    dragItemIndex.current = index;
    // e.target.classList.add("grabbing");
  };

  // 드래그 중일 때 실행되는 이벤트
  const dragEnter = (e, index) => {
    console.log("중");
    dragOverItemIndex.current = index;
    const copyListItems = [...list]; // 1
    const dragItemContent = copyListItems[dragItemIndex.current]; //2
    copyListItems.splice(dragItemIndex.current, 1); //3
    copyListItems.splice(dragOverItemIndex.current, 0, dragItemContent); // 4
    dragItemIndex.current = dragOverItemIndex.current;
    dragOverItemIndex.current = null; //5
    setList(copyListItems);
  };

  // 드래그가 끝나면 실행되는 이벤트
  const drop = (e) => {
    console.log("끝");
    // e.target.classList.remove("grabbing");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <List>
        {list &&
          list.map((item, index) => (
            <Item
              key={index}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragOver={onDragOver}
              onDragEnd={drop}
              draggable
            >
              {item}
            </Item>
          ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  text-align: center;
  padding: 10px;
  background-color: lightgray;
`;

export default DragAndDrop;
