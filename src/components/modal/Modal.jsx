import { styled } from "styled-components";

const Modal = ({ onSubmit, onClose }) => {
  const handleClickSubmit = async () => {
    onSubmit("my-value");
    onClose();
  };

  const handleClickCancel = () => {
    onClose();
  };
  return (
    <ModalBackground>
      <ModalBlock>
        <div className="content-box"></div>
        <div className="btn-box">
          <button onClick={handleClickSubmit}>Submit</button>
          <button onClick={handleClickCancel}>Cancel</button>
        </div>
      </ModalBlock>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.article`
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;

  .content-box {
    height: 90%;
  }

  .btn-box {
    height: 10%;
    display: flex;
    justify-content: space-around;
  }
`;

export default Modal;
