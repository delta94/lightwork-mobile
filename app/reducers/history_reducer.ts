import * as types from '../constants/actions';


interface historyItem {
    id: number,
    type: "MOVERS" | "MASTER" | "CLEANING"
    bonusCount: number,
    date: string,
    price: number,
    duration: string,
    status: "active" | "done" | "failed"
}

interface historyState {
    [index: number] : historyItem
}

const initialState: historyState = [
    { id: 1, type: "MOVERS", bonusCount: 30, date: "11/25/2019", price: 3000, duration: "02:00", status: "active" },
    { id: 2, type: "MASTER", bonusCount: 21, date: "11/25/2019", price: 2500, duration: "01:00", status: "done" },
    { id: 3, type: "CLEANING", bonusCount: 60, date: "11/25/2019", price: 5000, duration: "03:00", status: "done" },
    { id: 4, type: "MOVERS", bonusCount: 54, date: "11/12/2019", price: 10000, duration: "05:00", status: "failed" },
    { id: 5, type: "CLEANING", bonusCount: 164, date: "11/12/2019", price: 1500, duration: "01:00", status: "done" },
    { id: 6, type: "MOVERS", bonusCount: 5, date: "11/12/2019", price: 4500, duration: "03:00", status: "done" },
    { id: 7, type: "MOVERS", bonusCount: 89, date: "11/12/2019", price: 2500, duration: "01:00", status: "done" },
    { id: 8, type: "CLEANING", bonusCount: 12, date: "11/09/2019", price: 6500, duration: "05:00", status: "done" },
    { id: 9, type: "MASTER", bonusCount: 204, date: "11/09/2019", price: 3000, duration: "02:00", status: "done" },
    { id: 10, type: "MASTER", bonusCount: 84, date: "11/07/2019", price: 3000, duration: "02:00", status: "done" },
];

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default historyReducer;