export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // No reassignment happens here, so the values remain the same
  }

  return [task, task2];
}
