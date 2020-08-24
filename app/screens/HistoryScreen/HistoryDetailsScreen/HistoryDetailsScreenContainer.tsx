import { connect } from 'react-redux'
import HistoryDetailsScreen from './HistoryDetailsScreen'

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    navigation: ownProps.navigation,
    route: ownProps.route
  }
}

const mapDispatchToProps = () => {
  return {}
}

const HistoryDetailsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryDetailsScreen)

export default HistoryDetailsScreenContainer
