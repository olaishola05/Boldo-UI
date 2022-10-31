import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';
import BlogList1 from './BlogList1';
import Button from './Button';

const Blog = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/blog');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.blogcontainer}>
      <h2>Our blog</h2>
      <h3>Value proposition accelerator product management venture</h3>
      <BlogList1 />
      <Button handleNavigation={handleNavigation} />
    </div>
  );
};

export default Blog;
