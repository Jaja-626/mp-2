import styled from "styled-components";
import type { DisneyCharacter } from "../interfaces/DisneyCharacter";

const AllCharsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const SingleCharDiv = styled.div`
    width: 240px;
    border: 2px solid black;
    border-radius: 12px;
    padding: 10px;
    background: white;
    text-align: center;
    color: black;
`;

export default function DisneyCharacters(props: { data: DisneyCharacter[] }) {
    return (
      <AllCharsDiv>
          {props.data.map((char) => (
              <SingleCharDiv key={char._id}>
                  <img src={char.imageUrl} width="200" alt={char.name} />
                  <h3>{char.name}</h3>
                  <p>ID: {char._id}</p>
                  <p>Films: {char.films.length}</p>
              </SingleCharDiv>
          ))}
      </AllCharsDiv>
    )
}