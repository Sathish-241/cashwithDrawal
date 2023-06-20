import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onWithDraw = (id, value) => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="profile-name-container">
            <p className="profile-emoji">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div className="balance-display-container">
              <p className="balance-amount">{count}</p>
              <p className="balance-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                details={eachItem}
                key={eachItem.id}
                onWithDraw={this.onWithDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
