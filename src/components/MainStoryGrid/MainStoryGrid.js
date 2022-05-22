import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants'

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  padding-right: 16px;
  border-right: 1px solid var(--color-gray-300);
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  display: grid;
  
  > * {
    padding: 16px 0;
    &:first-of-type {
      padding-top:  0;
    }
    &:last-of-type {
      padding-bottom:  0;
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--color-gray-300);
    }
  }

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);
    > * {
      padding: 0;
      &:not(:last-of-type) {
        border: none;
      }
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  
  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
  }
`;

export default MainStoryGrid;
