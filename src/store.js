import { EventEmitter } from 'events';

class AppStore extends EventEmitter {
    selectedMonth = new Date().getMonth();
    selectedDayExpenses = [];
    selectedMonthExpenses = [];
    loggedInUserId = 0;

    authenticateUser() {

        this.broadcastStoreChange();
    }

    addExpense(newExpense) {

        this.broadcastStoreChange();
    }

    getExpensesForSelectedDay() {

        this.broadcastStoreChange();
    }

    getExpensesForSelectedMonth() {

        this.broadcastStoreChange();
    }

    broadcastStoreChange = () => this.emit("change");
}



const appStore = new AppStore();

export default appStore;