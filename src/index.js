
exports.min = function min (array) {
  if(!array || array.length === 0) {
    return 0;
  }

  return array.reduce((accum, curr) => {
    return curr < accum ? curr : accum;
  });
}

exports.max = function max (array) {
  if(!array || array.length === 0) {
    return 0;
  }

  return array.reduce((accum, curr) => {
    return curr > accum ? curr : accum;
  });
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) {
    return 0;
  }

  return array.reduce((accum, curr) => {
    return (accum + curr);
  }) / array.length;
}
