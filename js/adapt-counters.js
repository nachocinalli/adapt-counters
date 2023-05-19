import components from 'core/js/components';
import CountersModel from './CountersModel';
import CountersView from './CountersView';

export default components.register('counters', {
  model: CountersModel,
  view: CountersView
});
