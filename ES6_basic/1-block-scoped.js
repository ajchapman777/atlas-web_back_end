// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // Use the variables directly without reassigning them
    task = task; // This line is not necessary and can be removed
    task2 = task2; // This line is not necessary and can be removed
  }

  return [task, task2];
}
