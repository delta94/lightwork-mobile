import { connect } from 'react-redux'
import HistoryScreen from './HistoryScreen'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.historyScreen,
    date: state.historyScreen.map(n => { return n.date }),
    navigation: ownProps.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const HistoryScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)

export default HistoryScreenContainer
