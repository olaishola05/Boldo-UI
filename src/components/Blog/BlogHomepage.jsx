import React from 'react';
import styles from './Blog.module.css';
import chandlierImg from '../../images/chand.png';
import BlogList1 from './BlogList1';
import BlogList2 from './BlogList2';
import blogs from './Blog';
import Button from './Button';
import blogImg from '../../images/blogImg.png';

const handleNavigation = () => {
  console.log('Take me somewhere');
};
const BlogHomepage = () => (
  <div className={styles.blogHomepage}>
    <div className={styles.top}>
      <h2>Blog</h2>
      <h3>Thoughts and words</h3>
    </div>

    <div className={styles.blogItem}>
      <div className={styles.blogItemImg}>
        <img src={blogImg} alt="flying bird" />
      </div>
      <div className={styles.blogItemContent}>
        <div className={styles.text}>
          <h4>Category</h4>
          <span>November 22, 2021</span>
        </div>
        <p>Pitch termsheet backing validation focus release.</p>
        <div className={styles.blogFooter}>
          <div className={styles.postInfo}>
            <img src={chandlierImg} alt="post user" />
            <span>Chandler Bing</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h3 className={styles.latest}>Latest news</h3>
    <div className={styles.components}>
      <BlogList1 blogs={blogs} />
      <BlogList2 blogs={blogs} />
    </div>
    <Button handleNavigation={handleNavigation} />
  </div>
);

export default BlogHomepage;
