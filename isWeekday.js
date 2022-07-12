module.exports = function isWeekday(DAY) {
    if (DAY === 'Saturday' || DAY === 'Sunday'){
  return false;
}
else  (DAY === 'Monday' || DAY === 'Tuesday' || DAY === 'Wednesday' || DAY === 'Thursday' || DAY ==='Friday')
  return true;

}
