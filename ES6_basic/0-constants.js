export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  const combination = 'But sometimes let'; // Using const here
  return combination + getLast();
}
