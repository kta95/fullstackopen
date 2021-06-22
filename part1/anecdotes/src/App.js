import React, { useState } from 'react'

// button component
const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const Header = ({text}) => <h2>{text}</h2>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  // state hooks
  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})

  const nextHandler = () => {    // event handler for next button
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));
  }

  const voteHandler = () => {    // event handler for vote button
    const copyVotes = { ...votes }
    copyVotes[selected] += 1;
    setvotes(copyVotes);
  }

  const mostVoted = () => {
    let theVote = 0;
      for (let i = 0; i < anecdotes.length; i++) {
        if (votes[i] > votes[theVote]) {
          theVote =  i;
        }
      }
      console.log('most ', theVote)
      return theVote;
  }

  console.log('selected ', selected)
  console.log('votes for selected ', votes[selected])
  console.log('all votes ', votes)
  console.log(' mostvote ', mostVoted())
  return (
    <div>
      <Header text={"Anecdote of the day"} />
      {anecdotes[selected]} <br/>
      has {votes[selected]} votes <br/>
      <Button handler={voteHandler} text={"vote"} />
      <Button handler={nextHandler} text={"next anecdote"} /> <br/>
      <Header text={"Anecdote with most votes"} />
      {anecdotes[mostVoted()]} <br/>
      has {votes[mostVoted()]} votes
    </div>
  )
}

export default App