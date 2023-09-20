import { Return } from "../Image/image";

function BackButton() {
  return (
    <button
      style={{
        width: "30px",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => window.history.back()}
    >
      <Return />
    </button>
  );
}

export default BackButton;
