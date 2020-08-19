import { connect } from 'react-redux'
import BonusesScreen from './BonusesScreen'

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

const BonusesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BonusesScreen)

export default BonusesScreenContainer
