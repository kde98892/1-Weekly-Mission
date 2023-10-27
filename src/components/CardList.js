import Cards from './Card';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(3, 34rem);
  grid-template-rows: repeat(3, 33.4rem);

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }

  @media (max-width: 779px) {
    grid-template-columns: repeat(1, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }
`;

const CardList = ( {folderCards} ) => {
  return (
    <SectionContainer>
      <Cards folderCards={folderCards}/>
    </SectionContainer>
  )
}

export default CardList;