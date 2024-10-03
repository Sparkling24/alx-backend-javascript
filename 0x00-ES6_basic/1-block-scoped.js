export default function taskBlock(trueOrFalse) {
  let task = false; // Change var to let
  let task2 = true; // Change var to let

  return [task, task2];
  
  if (trueOrFalse) {
    task = true; // Reassigning the existing variable
    task2 = false; // Reassigning the existing variable
  }

  return [task, task2];
}
