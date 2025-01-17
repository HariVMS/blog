import React from 'react';
import './globals.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>MyBlog</title>
          <link rel="icon" type="image/png" href="/assets/blog.png" />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
};

export default layout;
