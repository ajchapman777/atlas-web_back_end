export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  let last = ' is okay'; // Using let here
  return last;
}

export function taskNext() {
  const combination = 'But sometimes let'; // Using const here
  return combination + getLast();
}
