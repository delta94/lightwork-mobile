import { connect } from 'react-redux'
import Orders from './Orders'

const mapStateToProps = (state) => {
  return {
    data: state.historyScreen,
    date: state.historyScreen.map((n) => {
      return n.date
    }),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)

export default OrdersContainer
