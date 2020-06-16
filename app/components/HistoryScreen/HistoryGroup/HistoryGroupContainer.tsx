import { connect } from "react-redux";
import HistoryGroup from './HistoryGroup';

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

const HistoryGroupContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryGroup);

export default HistoryGroupContainer;