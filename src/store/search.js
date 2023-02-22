import { makeAutoObservable } from "mobx";

class Search {
  searchCondition = "";
  constructor() {
    makeAutoObservable(this);
  }

  addSearchCondition(condition) {
    this.searchCondition = condition;
  }
}

export default new Search();
