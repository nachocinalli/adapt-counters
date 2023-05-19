import device from 'core/js/device';
import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function Counters (props) {
  const { _columns } = props;
  const screenSize = device.screenSize;
  const hasColumns = _columns[screenSize] > 1;
  return (

    <div className="component__inner cards__inner">

      <templates.header {...props} />

      <div className={classes([
        'component__widget', 'counters__widget', hasColumns && 'has-columns', hasColumns && `cols-${_columns[screenSize]}`])}>

        {props._items.map(({ title, body, _graphic, _countStart, counterLabel, _classes, _index, _isVisited, _isActive, _isAnimated }) =>
          <div

            className={classes([
              'counters__item',
              _isVisited && 'is-visited',
              _isActive && 'is-active',
              _isAnimated && 'is-animating',
              _graphic.src && 'has-image',
              _classes
            ])}
            key={_index}
            data-index={_index}
            style={(hasColumns && { width: `${100 / _columns[screenSize]}%` }) || null }
          >
            <div className="counters__item-container">
              { _graphic.src &&
              <templates.image {..._graphic}
                classNamePrefixes={['counters__item']}
                attributionClassNamePrefixes={['counters']}
              />
              }

              <div className="counters__count">
                {_countStart} {counterLabel && <span>{html(compile(counterLabel))}</span>}
              </div>

              {title &&
              <div className="counters__item-title">
                {html(compile(title))}
              </div>
              }
              {body &&
              <div className="counters__item-body">
                {html(compile(body))}
              </div>
              }
            </div>

            <div className="counters__item-state">
              <div className="icon"></div>
            </div>
          </div>

        )}

      </div>

    </div>
  );
}
