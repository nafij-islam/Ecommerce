import React from 'react'
import PropTypes from "prop-types";



const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-[1320px] mx-auto`}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};



export default Container;