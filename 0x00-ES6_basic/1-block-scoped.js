export default function taskBlock(trueOrFalse) {
  const task = false; // Change var to const
  var task2 = true; // Change var to let

  if (trueOrFalse) {
    task = fasle; // Reassigning the existing variable
    task2 = true; // Reassigning the existing variable
  }

  return [task, task2];
}
