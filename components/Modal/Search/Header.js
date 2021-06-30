import { useContext } from "react";
import styled from "styled-components";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import SearchContext from "../../../store/search-context";

import Input from "./Input";

const SearchHeaderDiv = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "A B C"
    "E E E";

  .arrowSearch {
    grid-area: A;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
  }
`;

const ContainerAvatarDiv = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: C;
  padding: 0 5px;

  img {
    height: 80%;
    border-radius: 5px;
  }
`;

export default function SearchHeader() {
  const { setSearching } = useContext(SearchContext);
  return (
    <SearchHeaderDiv>
      <div className="arrowSearch">
        <ArrowBackIcon
          onClick={() => setSearching()}
          style={{ fontSize: 30 }}
        />
      </div>
      <Input />
      <ContainerAvatarDiv>
        <img src="https://cdnb.artstation.com/p/assets/covers/images/011/331/725/large/alex-lusth-thumbnail.jpg?1529019337" />
      </ContainerAvatarDiv>
    </SearchHeaderDiv>
  );
}
