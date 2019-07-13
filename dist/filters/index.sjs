export default {
  pickTitle: function (is, titleSelectItems, idx, titleItem) {
    let selected = titleSelectItems[idx];

    if (is.type === 'single' || is.type === 'double' || is.type === 'triple') {
      return selected ? (is.keypath ? selected[is.keypath] : selected ) : titleItem;
    } else if (is.type === 'price') {
      
    }

    return titleItem;
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
