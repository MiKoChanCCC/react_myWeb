import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, headerStyle2 }) => {
    return (
        <>
            <Header style2={headerStyle2} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
