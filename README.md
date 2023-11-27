## 요구사항

### 기본

- [x] 링크 공유 페이지 url path는 ‘/shared’, 폴더 페이지 url path는 ‘/folder’가 되도록 설정했나요?
- [x] 폴더 페이지에서 상단 네비게이션 바는 스크롤 시 상단에 고정하지 않고 가려지도록 했나요?
- [x] 상단 네비게이션 바에 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/users/1”을 활용했나요?
- [x] “전체” 폴더를 선택한 경우 “공유”, “이름 변경”, “삭제” 버튼들이 보이지 않지만, 다른 폴더를 선택한 경우에는 버튼들이 보이나요?
- [x] 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용했나요?
- [x] “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용했나요?
- [x] Mobile에서 “폴더 추가” 버튼은 최하단에서 101px 떨어져있는 Floating Action Button으로 만들었나요?

## 주요 변경사항
- Styled Component 적용 
- 파일 위치 및 이름 변경
- Folder 페이지 관련 컴포넌트 제작
- 커스텀 훅 적용
- 버튼 태그 적용

## 다음 주차 변경 예정 사항
- 링크 검색 결과 기능 구현
- 케밥 클릭 시 버튼 노출
- 소팅에 따라 폴더 타이틀 변화되도록 ( < 완전 신경 안쓰고 있다가 지금 발견했습니다.. )
- 중복되는 코드들 합치기

<br>

## 스크린샷

### 1. PC
![image](https://github.com/codeit-bootcamp-frontend/1-Weekly-Mission/assets/144599629/e007bcb9-b06d-4820-b92d-6555e0e720fd)

### 2. 태블릿
![image](https://github.com/codeit-bootcamp-frontend/1-Weekly-Mission/assets/144599629/aa924001-0f2f-4b05-9c68-e0c6ef83393f)

### 3. 모바일
![image](https://github.com/codeit-bootcamp-frontend/1-Weekly-Mission/assets/144599629/be1cde59-4787-47d8-9504-8e6648ffd4e1)
