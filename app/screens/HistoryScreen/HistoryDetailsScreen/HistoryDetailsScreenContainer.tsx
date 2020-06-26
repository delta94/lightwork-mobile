import React from "react";
import { connect } from "react-redux";
import HistoryDetailsScreen from "./HistoryDetailsScreen";

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.historyScreen,
        date: state.historyScreen.map(n => { return n.date }),
        navigation: ownProps.navigation,
        route: ownProps.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const HistoryDetailsScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HistoryDetailsScreen);

export default HistoryDetailsScreenContainer;