export default function taskBlock(trueOrFalse) {
  const task = false; // Change var to const
  const task2 = true; // Change var to const

  if (trueOrFalse) {
    task = true; // Reassigning the existing variable
    task2 = false; // Reassigning the existing variable
  }

  return [task, task2];
}
