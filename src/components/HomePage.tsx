import { useState } from 'react'
import { Link } from 'react-router-dom'

// OresteBahizi - PascalCasing

function HomePage () {
  const [Value, setValue] = useState(0)

  function IncrementValue () {
    setValue(Value + 2)
  }

  return (
    <>
      <div className='p-3'>
        <button onClick={IncrementValue}>Count</button>
        <button onClick={() => setValue(0)}>Reset</button>
        <br />
        {Value > 10 ? '<p>Number is greater than 10</p>' : <p>{Value}</p>}
        <br />
        <Link to='/data'>Continue</Link>
      </div>
    </>
  )
}

export default HomePage

// import { useState } from 'react';

// function ColorChanger() {
//   const [color, setColor] = useState<string>('#ffffff');

//   const generateColor = () => {
//     const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     setColor(newColor);
//   };

//   setTimeout(() => {
//     generateColor()
//   }, 300);

//   return (
//     <div style={{ backgroundColor: color, padding: '50px' }}>
//       <p>{color}</p>
//       <button onClick={generateColor}>Change Color</button>
//     </div>
//   );
// }

// export default ColorChanger;

// import { useState } from 'react'

// function DiceRoller () {
//   const [dice, setDice] = useState<number>(1)

//   const rollDice = () => {
//     setDice(Math.floor(Math.random() * 6) + 1)
//   }

//   return (
//     <div>
//       <h2>{dice}</h2>
//       <button onClick={rollDice}>Roll Dice 🎲</button>
//     </div>
//   )
// }

// export default DiceRoller
