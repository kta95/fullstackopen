import React, { useState } from 'react'

const Header = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}

const Botton = ({handler, text}) => {
  return (
    <>
      <button onClick={handler} >{text}</button>
    </>
  )
}

const Bottons = (props) => {
  return (
    <div>
      <Botton handler={props.handler1} text={props.text1} />
      <Botton handler={props.handler2} text={props.text2} />
      <Botton handler={props.handler3} text={props.text3} />
    </div>
  )
}

const Statistic = ({text, value}) => {
  console.log('text and value ', text, value)
  return (
      <tr>  
        <td>{text}</td>
        <td>{value}</td> 
      </tr>
  )
}

const Statistics  = (props) => {

  const good = props.value1;
  const neutral = props.value2;
  const bad = props.value3;
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  console.log('positive ', props.value6 )
  return (
    <table> 
      <tbody>
      <Statistic text={props.text1} value={good} />
      <Statistic text={props.text2} value={neutral} />
      <Statistic text={props.text3} value={bad} />
      <Statistic text={props.text4} value={props.value4} />
      <Statistic text={props.text5} value={props.value5} />
      <Statistic text={props.text6} value={props.value6 + " %"} />
      </tbody>
    </table> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good + 1);
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1);
  }

  const badHandler = () => {
    setBad(bad + 1);
  }

  let all = good + neutral + bad;
  let average = ((good * 1) + (neutral * 0) + (bad * (-1))) / all;
  let positive = (good * 100) / all;

  return (
    <div>
      <Header title={'give feedback'} />
      <Bottons handler1={() => goodHandler()} text1={'good'}
               handler2={() => neutralHandler()} text2={'neutral'}
               handler3={() => badHandler()} text3={'bad'} />
      <Header title={'statistics'} /> 
      <Statistics text1={'good'} value1={good}
                  text2={'neutral'} value2={neutral}
                  text3={'bad'} value3={bad}
                  text4={'all'} value4={all}
                  text5={'average'} value5={average}
                  text6={'positive'} value6={positive} />
    </div>
  )
}

export default App