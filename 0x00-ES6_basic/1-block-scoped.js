/*export default function taskBlock(trueOrFalse) {
  let task = false; // Change var to let
  let task2 = true; // Change var to let

  if (trueOrFalse) {
    task = true; // Reassigning the existing variable
    task2 = false; // Reassigning the existing variable

    return [task, task2];
  
  }

   return [task, task2];
}*/

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    var task = true; // eslint-disable-line no-unused-vars
    var task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
