import styled from 'styled-components';
import EmptyLinkScreen from './EmptyLinkScreen';
import CardDivide from './CardDivide';

export const SectionContainer = styled.section`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(3, 34rem);
  grid-template-rows: repeat(auto, 33.4rem);

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }

  @media (max-width: 779px) {
    grid-template-columns: repeat(1, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }
`;

const CardList = ({ folderCards }) => {
  return (
    <>
      {folderCards.length > 0 ? (
        <SectionContainer>
          <CardDivide folderCards={folderCards} />
        </SectionContainer>
      ) : (
        <EmptyLinkScreen>저장된 링크가 없습니다🥲</EmptyLinkScreen>
      )}
    </>
  );
};

export default CardList;
