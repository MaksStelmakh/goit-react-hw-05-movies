import { TailSpin } from "react-loader-spinner";
import styled from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styled.spiner}>
      <TailSpin height="150" width="150" color="white" ariaLabel="loading" />
    </div>
  );
}
