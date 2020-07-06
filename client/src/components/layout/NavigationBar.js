import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = ({ auth, onClick }) => (
   <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >
      <Link to="/blog">
         <Navbar.Brand>
            <img
               src="https://lh3.googleusercontent.com/proxy/A3sIy5cnKRTwXA2IJc904Bm9WZJCvUjCk7ZqybdmwzHwXpBOcjfTODXmDo4XLCPN7JFpX2U7dBH_uswODiidQP6grmH-F90fdgR5AngDHU5hmym1AopN-HMSyrNb2jVdcsHyc_4F4cQXtx4y12rGxE6diH9uysMJLPyWMbMjvBGVLMLNOnyrc2mKPNTio2RNcCsWCOMnOrwuCk21abk5DTY1wWp1JBp8CQr8ZELKXfC7IfsWRhGNlVB2CKV8hK_-KlxvGmPl_k_vxpNnWTzE1vDv3Nedw5T8Z_xVVkIITcbKpHyUgV__wNbpM9M3QQKDmX8FkZd-QTUqsVDTK9KWdRbst0g75KpfMgQ9sTINyFGsbj0EMtrnl7_YUrtHQeF5XSRQk7qQXAml9o4h"
               style={{ height: 30, width: 30 }}
               className="d-inline-block align-top"
               alt=""
            />
            {"  Sagar's Blog "}
         </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
         {auth ? (
            <Link to="/logout">
               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav>
   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
