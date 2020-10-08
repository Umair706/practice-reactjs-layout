import React from "react";
import Header from "../Header";

/**
 * @author
 * @function Layout
 **/

 //When you call a compoent like 
 // <Component props="">{children}</Component> instead of 
 // <Component props="" /> then everything between the the Components tag can
 // be accessed using the props.children or Object destruciton

 //We create Layout Components to merge different components that are to be surely called
 //in many pages, into a single component to make it easy for reuse.
const Layout = (props) => {
  const {children,name} = props;
  return (
    <div>
      <Header />
      {children}      
      {name}
    </div>
  );
};

export default Layout;
