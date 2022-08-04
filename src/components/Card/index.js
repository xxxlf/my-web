import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "./styled";
import Code from "../Code";

export default ({ title, desc, codeText, children, ...rest }) => {
  const { isNight } = useSelector((state) => ({ isNight: state.isNight }));

  return (
    <CardContainer isNight={isNight} {...rest}>
      <header>{title}</header>
      <div className="content">
        <p className="desc">{desc}</p>
        {codeText && <Code codeText={codeText} />}
        {children && children}
      </div>
    </CardContainer>
  );
};
