/* eslint-disable react/prop-types */
function Button(props) {
  const buttonStyle = {
    width: props.width ? `${props.width}px` : "",
    backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : "",
  };
  return (
    <a
      href="#"
      className={`rounded-lg  py-[14px] px-[25px] font-semibold text-center`}
      style={buttonStyle}
    >
      {props.innerText}
    </a>
  );
}

export default Button;
