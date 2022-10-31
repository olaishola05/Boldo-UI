import React from 'react';
import PropTypes, { shape } from 'prop-types';
import styles from './Blog.module.css';

const BlogList1 = (props) => {
  const { blogs } = props;
  return (
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
};

BlogList1.propTypes = {
  blogs: PropTypes.arrayOf(shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    postImg: PropTypes.string.isRequired,
    postBy: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired,
  })).isRequired,
};

export default BlogList1;
