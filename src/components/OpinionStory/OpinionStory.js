import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants'

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <AuthorText>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorText>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  padding: 16px 0 16px 0;
  &:first-of-type {
    padding-top: 0;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  
  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorText = styled.div`
  flex: 1;
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
