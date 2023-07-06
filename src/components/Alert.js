import React from "react";

const Alert = (props) => {
  const { type, message } = props;

  return (
    <div>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <strong>{type}: </strong> {message}
      </div>
    </div>
  );
};

export default Alert;
