import React from 'react';
import {
    BlogWrapper,
    BlogBox,
    BlogButton
} from './styles';

function Blog() {
  return (
    <BlogWrapper id='blogLink'>
        <BlogBox>
            <BlogButton href="https://danielndourado.netlify.com" target="_blank" rel="noopener noreferrer" title="Informe-se sobre saúde">Visite meu blog</BlogButton>
        </BlogBox>
    </BlogWrapper>
  );
}

export default Blog;
