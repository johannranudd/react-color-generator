import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  .control-section {
    padding: 1rem;
    h2 {
      font-size: 1.6rem;
    }
    input {
      padding: 0.5rem 0.3rem;
      font-size: 1.2rem;
      border: 1.6px solid grey;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    button {
      padding: 0.6rem 0.3rem;
      font-size: 1.2rem;
      color: white;
      background-color: #6666ff;
      border: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }
  }
  .color-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    .single-color {
      height: 150px;
    }
  }

  /* media */
  @media (min-width: 768px) {
    .control-section {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2.2rem;
        margin-right: 2rem;
      }
    }
  }
`;
