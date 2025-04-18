/* eslint-disable react/prop-types */
const Button = ({ text, color, bg, hoverColor, bgHover }) => {
  return (
    <button className={`btn rounded-none transition-all duration-300 border-2 h-14 text-text px-10 ${color} ${bg} ${hoverColor} ${bgHover}`}>{ text }</button>
  );
};

export default Button;
