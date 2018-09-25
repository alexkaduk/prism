import React from "react";
import PropTypes from "prop-types";

const Hotel = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        d="M18 18.203h-.797a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29c0-.109.039-.202.117-.28a.393.393 0 0 1 .29-.118H18c.11 0 .203.04.281.118a.384.384 0 0 1 .117.28c0 .115-.039.212-.117.29a.384.384 0 0 1-.281.117zm-12 0h-.797a.393.393 0 0 1-.289-.117.393.393 0 0 1-.117-.29c0-.109.039-.202.117-.28a.393.393 0 0 1 .29-.118H6c.11 0 .203.04.281.118a.384.384 0 0 1 .117.28c0 .115-.039.212-.117.29a.384.384 0 0 1-.281.117zm12.93-5.289c.073.23.136.507.191.832.055.326.082.61.082.856v1.601c0 .328-.117.61-.351.844a1.16 1.16 0 0 1-.852.351H5.203a1.16 1.16 0 0 1-.851-.351A1.15 1.15 0 0 1 4 16.203v-1.601c0-.245.026-.53.078-.856.052-.325.117-.603.195-.832l1.891-5.68c.083-.24.228-.449.434-.629.205-.18.433-.3.683-.363a.667.667 0 0 1 .024-.113l.03-.106c.095-.27.208-.442.34-.515A.726.726 0 0 1 8 5.398h3.203c.047 0 .107.01.18.032a.52.52 0 0 1 .219.14.525.525 0 0 1 .214-.14.66.66 0 0 1 .184-.032h3.203c.083 0 .192.037.324.11.133.073.244.245.332.515a.626.626 0 0 1 .036.106c.007.034.016.072.027.113.25.063.478.184.683.363.206.18.348.39.426.63l1.899 5.68zm-6.805-6.71a1.812 1.812 0 0 0-.082.3A2.476 2.476 0 0 0 12 7c0 .193.014.358.043.496.029.138.056.238.082.3h2.953c.026-.062.054-.162.082-.3.029-.138.043-.303.043-.496s-.014-.358-.043-.496a1.812 1.812 0 0 0-.082-.3h-2.953zm-4 0a1.812 1.812 0 0 0-.082.3A2.476 2.476 0 0 0 8 7c0 .193.014.358.043.496.029.138.056.238.082.3h2.953c.026-.062.054-.162.082-.3.029-.138.043-.303.043-.496s-.014-.358-.043-.496a1.812 1.812 0 0 0-.082-.3H8.125zM6.289 9.397h10.625l-.64-1.914a.576.576 0 0 0-.106-.183.979.979 0 0 0-.168-.16c-.005.156-.02.306-.043.449a2.148 2.148 0 0 1-.098.387c-.088.27-.199.442-.332.515a.726.726 0 0 1-.324.11H12a.66.66 0 0 1-.184-.032.525.525 0 0 1-.214-.14.52.52 0 0 1-.22.14.683.683 0 0 1-.179.032H8a.726.726 0 0 1-.324-.11c-.133-.073-.246-.245-.34-.515a2.739 2.739 0 0 1-.09-.387 3.504 3.504 0 0 1-.043-.45.979.979 0 0 0-.168.16.576.576 0 0 0-.105.184l-.64 1.914zm-1.258 3.766c-.01.042-.022.083-.035.125a1.634 1.634 0 0 0-.035.133l.117-.016c.042-.005.083-.008.125-.008H18c.042 0 .082.003.121.008l.121.016a1.634 1.634 0 0 0-.078-.258l-.984-2.96H6.023l-.992 2.96zm13.367 1.438c0-.11-.039-.204-.117-.282a.384.384 0 0 0-.281-.117H5.203c-.114 0-.21.04-.289.117a.384.384 0 0 0-.117.282v1.601c0 .11.039.203.117.281a.393.393 0 0 0 .29.118H18c.11 0 .203-.04.281-.118a.384.384 0 0 0 .117-.28v-1.602z"
      />
    </g>
  </svg>
);

Hotel.displayName = "HotelIcon";

Hotel.defaultProps = {
  color: "currentColor",
  children: null
};

Hotel.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Hotel;
