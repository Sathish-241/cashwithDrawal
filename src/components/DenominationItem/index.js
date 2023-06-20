import './index.css'

const DenominationItem = props => {
  const {details, onWithDraw} = props
  const {id, value} = details

  const withDraw = () => {
    onWithDraw(id, value)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
