import styled from "styled-components";
import addIcon from "../../assets/add_icon.svg";
import SortingButton from "../UI/SortingButton";
import { useState } from "react";
import FAB from "../UI/FAB";
import addIconWhite from "../../assets/add_icon_white.svg";

const SortingContainer = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: calc(100vw - 6.4rem);
    align-items: flex-start;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const FolderAdd = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  flex-shrink: 0;

  p {
    color: var(--primary);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  }

  @media (max-width: 779px) {
    display: none;
  }
`;

const AddIcon = styled.img`
  width: 16px;
  height: 16px;
`;
{
  /*피그마에서 FAB 버튼 자체를 컴포넌트로 만든 거 같아서 일반 스타일 버튼은 따로 추가해줬는데, FAB css 변경하는 게 나을까요?*/
}

const Sorting = ({ selectedFolder }) => {
  const [activeFolderId, setActiveFolderId] = useState(selectedFolder[0].id);

  const handleClick = (folderId) => {
    setActiveFolderId(folderId);
  };

  return (
    <SortingContainer>
      <ButtonContainer>
        {selectedFolder.map((folder, index) => (
          <SortingButton key={index} folderId={folder.id} createdAt={folder.created_at} isActive={activeFolderId === folder.id} handleClick={() => handleClick(folder.id)} buttonIndex={index}>
            {folder.name}
          </SortingButton>
        ))}
      </ButtonContainer>
      <FolderAdd>
        <p>폴더 추가</p>
        <AddIcon src={addIcon}></AddIcon>
      </FolderAdd>
      <FAB src={addIconWhite}>폴더 추가</FAB>
    </SortingContainer>
  );
};

export default Sorting;
