import React from 'react';
import styles from './Blog.module.css';
import officeImg from '../../images/office2.png';
import femaleIng from '../../images/female2.png';
import fileImg from '../../images/files.png';
import chandlierImg from '../../images/chand.png';
import rachealImg from '../../images/rachel.png';
import monicaImg from '../../images/monica.png';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Category',
      content: 'Pitch termsheet backing validation focus release.',
      date: 'November 22, 2021',
      postImg: officeImg,
      postBy: 'Chandler Bing',
      userImg: chandlierImg,
    },
    {
      id: 2,
      title: 'Category',
      content:
        'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
      date: 'November 22, 2021',
      postImg: femaleIng,
      postBy: 'Rachel Green',
      userImg: rachealImg,
    },
    {
      id: 3,
      title: 'Category',
      content:
        'Beta prototype sales iPad gen-z marketing network effects value proposition',
      date: 'November 22, 2021',
      postImg: fileImg,
      postBy: 'Monica Geller',
      userImg: monicaImg,
    },
  ];
  return (
    <div className={styles.blogcontainer}>
      <h2>Our blog</h2>
      <h3>Value proposition accelerator product management venture</h3>

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
      <div className={styles.btnContainer}>
        <button type="button" className={styles.btn}>Load more</button>
      </div>
    </div>
  );
};

export default Blog;
