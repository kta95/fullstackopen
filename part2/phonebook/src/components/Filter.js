const Filter = ({ value, eventHandler }) =>
(
  <p>filter shown with <input value={value} onChange={eventHandler} /></p>
)

export default Filter