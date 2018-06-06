function app(a, b) {
  if (a > 0) {
    while (b < 0) {
      b++;
    }
    while (a > 0) {
      a--;
    }
  } else {
    while (a < 0) {
      a++;
    }
  }

  if(a === b) {
    return 'successful';
  } else {
    return 'not very successful';
  }
}

module.exports = app;