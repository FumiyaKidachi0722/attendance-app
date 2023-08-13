import React from "react";

type ErrorTooltipProps = {
  message: string | null;
};

const ErrorTooltip: React.FC<ErrorTooltipProps> = ({ message }) => {
  if (!message) return null;

  return <div className="error-tooltip">{message}</div>;
};

export default ErrorTooltip;
