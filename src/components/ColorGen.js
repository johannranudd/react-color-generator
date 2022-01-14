import React, { useEffect, useState } from 'react';
import { StyledDiv } from './ColorGen.styled';
import Values from 'values.js';

const ColorGen = () => {
  const [color, setColor] = useState('');
  const [colorValue, setColorvalue] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      setColorvalue(new Values(color).all(10));
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    setColorvalue(new Values('#333999').all(10));
  }, []);

  return (
    <StyledDiv>
      <section className='control-section'>
        <h2>Color generator</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            className={error && 'error'}
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
          return <SingleColor key={index} {...item} hex={hex} />;
        })}
      </section>
    </StyledDiv>
  );
};

const SingleColor = ({ hex, weight }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className='single-color'
      onClick={handleCopy}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
      {copied && <p>copied to clipboard</p>}
    </div>
  );
};

export default ColorGen;
