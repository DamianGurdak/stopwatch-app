import React from 'react';
import clsx from 'clsx';
import styles from './BtnComponent.module.scss';

function BtnComponent(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button
          // className='stopwatch-btn stopwatch-btn-gre'
          className={clsx(styles.stopwatch_btn, styles.stopwatch_btn_gre)}
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ''
      )}

      {props.status === 1 ? (
        <div>
          <button
            // className='stopwatch-btn stopwatch-btn-red'
            className={clsx(styles.stopwatch_btn, styles.stopwatch_btn_red)}
            onClick={props.stop}
          >
            Stop
          </button>
          <button
            // className='stopwatch-btn stopwatch-btn-yel'
            className={clsx(styles.stopwatch_btn, styles.stopwatch_btn_yel)}
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ''
      )}

      {props.status === 2 ? (
        <div>
          <button
            // className='stopwatch-btn stopwatch-btn-gre'
            className={clsx(styles.stopwatch_btn, styles.stopwatch_btn_gre)}
            onClick={props.resume}
          >
            Resume
          </button>
          <button
            // className='stopwatch-btn stopwatch-btn-yel'
            className={clsx(styles.stopwatch_btn, styles.stopwatch_btn_yel)}
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default BtnComponent;
