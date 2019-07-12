export default {
  pickItem: function (is, item) {
    return is.keypath ? item[is.keypath] : item;
  },

  compareItem: function (is, item) {

    if (is.keypath && is.selected) {
      return is.selected[is.keypath] === item[is.keypath];
    } else {
      return is.selected === item;
    }
  },

  compareItems: function (is, idx, item) {
    if (is.keypath && is.selected && is.selected[idx]) {
      return is.selected[idx][is.keypath] === item[is.keypath];
    } else {
      return is.selected[idx] === item;
    }
  }
};
