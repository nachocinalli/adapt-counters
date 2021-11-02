import ComponentView from 'core/js/views/componentView';

class CountersView extends ComponentView {

  postRender() {
    this.$('.counters__widget').imageready(() => {
      this.setReadyStatus();
    });

    this.$('.counters__widget').on('onscreen.animate', this.checkIfOnScreen.bind(this));

    if (this.model.get('_setCompletionOn') !== 'inview') return;
    this.setupInviewCompletion('.component__widget');

  }

  animateItems () {
    const speed = this.model.get('_transitionSpeed');
    for (const item of this.model.getChildren()) {
      const updateCount = () => {
        const _countEnd = item.get('_countEnd');
        const _countStart = item.get('_countStart');
        const inc = _countEnd / speed;

        if (_countStart < _countEnd) {
          item.set('_countStart', Math.ceil(_countStart + inc));
          setTimeout(updateCount, 1);
        } else {
          item.set('_countStart', _countEnd);
          item.toggleVisited();
        }
      };
      updateCount();
    }
  }

  checkIfOnScreen({ currentTarget }, { percentInviewVertical }) {
    if (percentInviewVertical < this.model.get('_percentInviewVertical')) return;

    $(currentTarget).off('onscreen.animate');
    this.animateItems();
  }

  remove() {
    this.$('.counters__widget').off('onscreen.animate');
    super.remove();
  }
}
CountersView.template = 'counters.jsx';

export default CountersView;
