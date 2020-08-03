import React from "react";

const HomeIcon = ({ height = 35, width = 35, fill = "black" }) => {
  return (
    <svg
      viewBox="0 0 512.001 512.001"
      height={height}
      width={width}
      fill={`${fill}`}
    >
      <path d="M503.402 228.885L273.684 19.567a26.13 26.13 0 0 0-35.367-.001L8.598 228.886c-8.077 7.36-10.745 18.7-6.8 28.9a26.08 26.08 0 0 0 24.484 16.772h36.7v209.72a15.06 15.06 0 0 0 15.057 15.057h125.914a15.06 15.06 0 0 0 15.057-15.057V356.932h74.002V484.27a15.06 15.06 0 0 0 15.057 15.057h125.908a15.06 15.06 0 0 0 15.057-15.057V274.547h36.697c10.926 0 20.537-6.584 24.484-16.772 3.94-10.2 1.273-21.53-6.804-28.9zm-58.3-186.155h-101.12L460.15 148.366v-90.58a15.06 15.06 0 0 0-15.057-15.056z" />
    </svg>
  );
};
import PropTypes from "prop-types";

HomeIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
};
export default HomeIcon;
