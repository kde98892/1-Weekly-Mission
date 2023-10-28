import { useState, useEffect, useCallback } from 'react';
import { getSearchFolder } from "../global/api";

const useGetSearchFolder = (userID) => {
  const [folderInfo, setFolderInfo] = useState();
  
  const getData = useCallback(async (userID) => {
    const folderData = await getSearchFolder(userID);
    if (!folderData) {
      console.log("저장된 링크가 없습니다.");
      return;
    }
    setFolderInfo(folderData);
  }, []);

  useEffect(() => {
    getData(userID);
  }, [getData, userID]);

  return folderInfo;
}
 
export default useGetSearchFolder;