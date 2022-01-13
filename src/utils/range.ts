function* range(start: number, end: number, step = 1) {
  let state = start;
  while (state < end) {
    yield state;
    state += step;
  }
  return;
}

export default range;
