export default function taskBlock(trueOrFalse) {
  var task = false; // Change var to let
  var task2 = true; // Change var to let

  if (trueOrFalse) {
    task = true; // Reassigning the existing variable
    task2 = false; // Reassigning the existing variable
  }

  return [task, task2];
}
