import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
