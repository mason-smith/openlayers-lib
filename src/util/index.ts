import moment from 'moment';

export * from './testsUtil';

/**
 * Returns formatted time
 * @param {String} isodate - 2019-11-08T22:00:15.304Z
 */
const getWeatherTime = (isodate: string): moment.Moment => {
  const d = moment(isodate);
  d.utc();
  const hr = d.hour();
  const r = hr % 3; // weather only comes on 3 hr chunks
  const whr = hr - r;
  d.hour(whr);
  d.minute(0);
  d.second(0);
  return d;
};

/**
 * Returns weather date and time
 */
export const getWeatherData = (): { wd: string; time: string } => {
  const d = getWeatherTime(new Date().toISOString());
  let time = d.toISOString();
  if (time.includes('.')) {
    time = `${time.split('.')[0]}Z`;
  }
  const wd = d.format('MMYYYY');
  return {
    wd,
    time,
  };
};
