import React from 'react';
import {
  BlogTitle,
  BlogWrapper
} from './styles';

function Blog() {
  return (
    <>
    <BlogTitle id='blog'>Minha Coluna</BlogTitle>
    <a  href="https://danielndourado.netlify.com" target="_blank" rel="noopener noreferrer" title="Visite meu blog, Informe-se sobre saúde">
      <BlogWrapper id='blogLink'/>
    </a>
    </>
  );
}

export default Blog;
