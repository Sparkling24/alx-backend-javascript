export default function taskBlock(trueOrFalse) {
  let task = true; // Change var to let
  let task2 = false; // Change var to let

  if (trueOrFalse) {
    task = false; // Reassigning the existing variable
    task2 = false; // Reassigning the existing variable
  }

  return [task, task2];
}
