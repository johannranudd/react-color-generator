import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  .control-section {
    padding: 1rem;
    margin-bottom: 1rem;
    h2 {
      font-size: 3rem;
      font-weight: 400;
      margin: 1rem 0;
      font-family: 'Qwigley', cursive;
    }
    form {
      display: flex;
      input {
        padding: 0.3rem 0.3rem;
        font-size: 1.2rem;
        border: 1.6px solid grey;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        max-width: 60%;
      }
      .error {
        border: 2px solid red;
      }
      button {
        padding: 0.4rem 0.3rem;
        font-size: 1.2rem;
        color: white;
        background-color: #6666ff;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
      }
    }
  }
  /* colors */
  .color-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    .single-color {
      cursor: pointer;
      padding: 1rem;
    }
  }

  /* media */
  @media (min-width: 768px) {
    .control-section {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      h2 {
        font-size: 4rem;
        margin-right: 2rem;
      }
    }
    /* colors */
    .color-section {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      .single-color {
        height: 120px;
      }
    }
  }
  @media (min-width: 1080px) {
    .color-section {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      .single-color {
        height: 130px;
      }
    }
  }
`;
