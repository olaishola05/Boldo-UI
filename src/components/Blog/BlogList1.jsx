import React from 'react';
import styles from './Blog.module.css';
import blogs from '../../utills/blogs';

const BlogList1 = () => (
  <>
    <div className={styles.blogs}>
      {blogs.map((blog) => (
        <div className={styles.blog} key={blog.id}>
          <div className={styles.blogImg}>
            <img src={blog.postImg} alt="blog" />
          </div>
          <div className={styles.blogContent}>
            <div className={styles.content}>
              <h4>{blog.title}</h4>
              {' '}
              <span>{blog.date}</span>
            </div>
            <p className={styles.description}>{blog.content}</p>
            <div className={styles.blogFooter}>
              <div className={styles.postInfo}>
                <img src={blog.userImg} alt="" />
                <p>{blog.postBy}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default BlogList1;
