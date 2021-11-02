import Adapt from 'core/js/adapt';
import CountersModel from './CountersModel';
import CountersView from './CountersView';

export default Adapt.register('counters', {
  model: CountersModel,
  view: CountersView
});
