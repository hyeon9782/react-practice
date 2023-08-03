import { modals } from "./components/Modals";
import useModals from "./hooks/useModals";

function App() {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.Modal, {
      onSubmit: (value) => {
        console.log(value);
        console.log("비지니스 로직 처리");
      },
    });
  };
  return (
    <>
      <button onClick={handleClick}>모달 열기</button>
    </>
  );
}

export default App;
