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

      const [authorInput, setAuthorInput] = useState('James');

      // const onChangeAuthor = (event) => {
      //       console.log('in onChangeAuthor 🥺', event.target)

      //       // in jQuery: 
      //       // let authorName = $('#authorInput').val();
      //       let newAuthor = event.target.value;
      //       console.log('author is', newAuthor)
      //       setAuthorInput(newAuthor);
      // };


      return (
            <div>
                  <h2> space jams!! </h2>
                  <h4> created by {authorInput} </h4>
                  <input 
                        type="text"
                        placeholder="put Author name here"
                        // all in one line 👇
                        onChange={(event) => setAuthorInput(event.target.value)}
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
