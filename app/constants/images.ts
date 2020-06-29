const IMAGES = {
    navigation: {
        history: {
            normal: require("../../assets/images/tab-history.png"),
            active: require("../../assets/images/tab-history-focused.png"),
        },
        main: {
            normal: require("../../assets/images/tab-main.png"),
            active: require("../../assets/images/tab-main-focused.png"),
        },
        bonuses: {
            normal: require("../../assets/images/tab-bonuses.png"),
            active: require("../../assets/images/tab-bonuses-focused.png"),
        },
        help: {
            normal: require("../../assets/images/tab-help.png"),
            active: require("../../assets/images/tab-help-focused.png"),
        },
    },
    history: {
        mover: require("../../assets/images/history-mover.png"),
        master: require("../../assets/images/history-master.png"),
        cleaning: require("../../assets/images/history-cleaning.png"),
        grey: require("../../assets/images/history-grey.png"),
        dark: require("../../assets/images/history-dark.png"),
        details: {
            type: {
                mover: require("../../assets/images/history-mover.png"),
                master: require("../../assets/images/history-master.png"),
                cleaning: require("../../assets/images/history-cleaning.png"),
            },
            status: {
                active: require("../../assets/images/history-status-active.png"),
                done: require("../../assets/images/history-status-done.png"),
                failed: require("../../assets/images/history-status-failed.png"),
            },
            bonuses: require("../../assets/images/history-details-bonuses.png"),
            date: require("../../assets/images/history-details-date.png"),
            money: require("../../assets/images/history-details-money.png"),
            duration: require("../../assets/images/history-details-time.png"),
        }
    },
    main: {
        card: require("../../assets/images/card.png"),
        help: require("../../assets/images/main-help.png"),
        offer: require("../../assets/images/main-offer.png"),
        chat: require("../../assets/images/main-chat.png"),
    }
}

export default IMAGES;