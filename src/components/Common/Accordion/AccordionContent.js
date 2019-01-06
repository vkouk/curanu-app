import React from "react";

export default ({
  children,
  isExpanded,
  headerTitle,
  onAccordionToggle,
  index
}) => {
  return (
    <div
      className={`accordion__content ${isExpanded(index) ? "is-expanded" : ""}`}
      index={index}
    >
      <div
        className="accordion__header"
        onClick={() => onAccordionToggle(index)}
      >
        <div className="accordion__header__text">{headerTitle}</div>
        <div className="accordion__header__icon" />
      </div>
      <div className="accordion__body">{children}</div>
    </div>
  );
};
