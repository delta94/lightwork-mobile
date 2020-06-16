import { connect } from "react-redux";
import HistoryScreen from './HistoryScreen';

const mapStateToProps = (state) => {
    return {
        data: state.historyScreen,
        date: state.historyScreen.map(n => { return n.date })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const HistoryScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);

export default HistoryScreenContainer;