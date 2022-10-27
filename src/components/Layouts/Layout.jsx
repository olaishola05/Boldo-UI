import PropTypes from 'prop-types';
import styles from './Layout.module.css';
import TopNav from './TopBar';

function Layout(props) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <TopNav />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
