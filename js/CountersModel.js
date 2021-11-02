import ItemsComponentModel from 'core/js/models/itemsComponentModel';

export default class CountersModel extends ItemsComponentModel {
  defaults() {
    return ItemsComponentModel.resultExtend('defaults', {
      _animateItems: false,
      _percentInviewVertical: 70,
      _transitionSpeed: 5000
    });
  }
}
