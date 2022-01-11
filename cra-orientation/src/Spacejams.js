// import './Spacejams.css';

// import the useState function from
// inside the react library
import { useState } from 'react';


function Spacejams() {
      // let count = 0; <- non react way to do this
      const [count, setCount] = useState(0);

      const [invaders, setInvaders] = useState('👾 👾 👾')

      const [authorInput, setAuthorInput] = useState('');

      const [author, setAuthor] = useState('James');

      const onButtonClick = () => {
            console.log('moar jams 🏀');
            //increase the value of count
            // count++;
            //and re-render out component with the new state
            // reRender(state)
            setCount(count+1);

      };
      

      const addInvader = () => {
            setInvaders(invaders + ' 👾')
      };


      // const onChangeAuthor = (event) => {
      //       console.log('in onChangeAuthor 🥺', event.target)

      //       // in jQuery: 
      //       // let authorName = $('#authorInput').val();
      //       let newAuthor = event.target.value;
      //       console.log('author is', newAuthor)
      //       setAuthorInput(newAuthor);
      // };

      const onSubmitAuthor = (event) => {
            // don't reload the page
            event.preventDefault();
            console.log('new author is',authorInput);
            setAuthor(authorInput);

            // clear the inputs:
            // jQuery version:
            // $('input').val('');
            // react version
            setAuthorInput('');
      };
 
      return (
            <div>
                  <h2> space jams!! </h2>
                  <h4> created by {author} </h4>
                  <form onSubmit={onSubmitAuthor}>
                        <input 
                              type="text"
                              placeholder="put Author name here"
                              // all in one line 👇
                              onChange={(event) => setAuthorInput(event.target.value)}
                              value = {authorInput}
                        />
                        <button>Submit! 🐮</button>
                  </form>
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
