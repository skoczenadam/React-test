/* eslint-disable react/prop-types */
import clsx from "clsx";
import css from "./Alert.module.css";
import { RxCodesandboxLogo } from "react-icons/rx";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <>
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
      <p><RxCodesandboxLogo className="my-icon" size="100" /> {name}</p>
      </>
  );
};