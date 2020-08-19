import { connect } from 'react-redux'
import HistoryDetailsScreen from './HistoryDetailsScreen'

const mapStateToProps = (state, ownProps) => {
  return {
    navigation: ownProps.navigation,
    route: ownProps.route,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const HistoryDetailsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryDetailsScreen)

export default HistoryDetailsScreenContainer
