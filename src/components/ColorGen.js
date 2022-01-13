import React, { useEffect, useState } from 'react';
import { StyledDiv } from './ColorGen.styled';
import Values from 'values.js';

const ColorGen = () => {
  const [color, setColor] = useState('');
  const [colorValue, setColorvalue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setColorvalue(new Values(color).all(10));
      //   console.log(colorValue);
    } catch {
      console.log('wtf');
    }
  };

  useEffect(() => {
    setColorvalue(new Values('#333999').all(10));
  }, []);

  return (
    <StyledDiv>
      <section className='control-section'>
        <h2>Color Generator</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#333999'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </section>

      <section className='color-section'>
        {colorValue.map((item, index) => {
          const { hex } = item;
          return <SingleColor key={index} hex={hex} />;
        })}
      </section>
    </StyledDiv>
  );
};

const SingleColor = ({ hex }) => {
  return (
    <div className='single-color' style={{ backgroundColor: `#${hex}` }}>
      #{hex}
    </div>
  );
};

export default ColorGen;
