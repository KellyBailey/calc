import React from 'react';
import { connect } from 'react-redux';

import { makeOptions } from './util';
import { setSchedule as setScheduleAction } from '../actions';
import { SCHEDULE_LABELS } from '../constants';

function Schedule({ idPrefix, schedule, setSchedule }) {
  const id = `${idPrefix}schedule`;
  const handleChange = e => { setSchedule(e.target.value); };

  return (
    <div className="filter filter-schedule">
      <label htmlFor={id}>Schedule:</label>
      <a href="/about#schedules" className="filter-more-info">
        What's this?
      </a>
      <select id={id} name="schedule" value={schedule}
              onChange={handleChange}>
        {makeOptions(SCHEDULE_LABELS)}
      </select>
    </div>
  );
}

Schedule.propTypes = {
  schedule: React.PropTypes.string.isRequired,
  setSchedule: React.PropTypes.func.isRequired,
  idPrefix: React.PropTypes.string,
};

Schedule.defaultProps = {
  idPrefix: '',
};

export default connect(
  state => ({ schedule: state.schedule }),
  { setSchedule: setScheduleAction }
)(Schedule);
