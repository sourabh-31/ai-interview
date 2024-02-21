function Button({
  children,
  styles,
  btnAction = "",
  dispatch = () => {},
  onBtnClick = () => {},
}) {
  function handleClick() {
    dispatch({ type: btnAction });
    onBtnClick();
  }

  return (
    <button
      className={`bg-secondaryColor text-white px-4 py-2 rounded-full font-light ${styles}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
