// import './Spacejams.css';

// import the useState function from
// inside the react library
import { useState } from 'react';


function Spacejams() {
      // let count = 0; <- non react way to do this
      const [count, setCount] = useState(0);

      const onButtonClick = () => {
            console.log('moar jams 🏀');
            //increase the value of count
            // count++;
            //and re-render out component with the new state
            // reRender(state)
            setCount(count+1);

      };
      
      const [invaders, setInvaders] = useState('👾 👾 👾')

      const addInvader = () => {
            setInvaders(invaders + ' 👾')
      };

      const onChangeAuthor = () => {
            console.log('in onChangeAuthor 🥺')
      };


      return (
            <div>
                  <h2> space jams!! </h2>
                  <h4> created by James </h4>
                  <input 
                        type="text"
                        placeholder="put Author name here"
                        onChange={onChangeAuthor}
                  />
                  <h4> how many space jams are there?? </h4>
                  <h3> there are {count} space jams to start</h3>
                  <h4> look out, space invaders! {invaders} </h4>
                  {/* this calls the onClick function 👇 */}
                  <button onClick={onButtonClick}> 
                        MOAR SPACE JAMS
                  </button>
                  <button onClick={addInvader}> 
                        MOAR 👾 emojis
                  </button>
            </div>
      );
}

export default Spacejams;
