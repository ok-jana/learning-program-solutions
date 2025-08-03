import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const App = () => {
  const option = 'book'; // 'blog' or 'course'

  let content;
  if (option === 'book') {
    content = <BookDetails />;
  } else if (option === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Blogger App</h1>
      {content}
    </div>
  );
};

export default App;