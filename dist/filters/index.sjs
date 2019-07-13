export default {
  pickTitle: function (iss, idx, item) {
    let is = iss[idx];

    if (is.type === 'single') {
      return is.selected ? is.selected : item;
    } else if (is.type === 'double' || is.type === 'triple') {
      let last = is.selected.slice(-1);
      return last ? last : item;
    } else if (is.type === 'price') {
      
    }

    return item;
  },

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
