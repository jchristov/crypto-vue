const colorizePercentChange = change =>
  change >= 0 ? 'text-success' : 'text-danger';

const getImageUrl = ticker =>
  ticker.meta && `http://cryptocompare.com${ticker.meta.ImageUrl}`;

const schedule = (fn, timeout) => {
  setTimeout(() => {
    schedule(fn, timeout);
  }, timeout);
  fn();
};

const colorizePercentChangeStyle = change => parseInt(change) >= 0 ? '#28a745' : '#dc3545';

export { colorizePercentChange, getImageUrl, schedule, colorizePercentChangeStyle };