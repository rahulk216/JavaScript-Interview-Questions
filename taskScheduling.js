const schedules = [
  { id: "a", dependencies: ["b", "c", "e"] },
  { id: "b", dependencies: ["d","c"] },
  { id: "c", dependencies: [] },
  { id: "d", dependencies: ["e"] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] },
];

const taskSchedule = function (tasks) {
  let remainingTasks = tasks.length;
  //let completedTasks = 0;
  let compTasks = [];
  let var_tasks = tasks;

  while (remainingTasks >= 0) {
    for (let i = 0; i < var_tasks.length; i++) {
      if (var_tasks[i].dependencies.length === 0) {
        compTasks.push(var_tasks[i].id);
        remainingTasks -= 1;
        var_tasks.splice(i, 1);
      } else {
        const multipleExist = var_tasks[i].dependencies.every((value) => {
          return compTasks.includes(value);
        });

        if (multipleExist) {
          compTasks.push(var_tasks[i].id);
          remainingTasks -= var_tasks[i].dependencies.length;
          var_tasks.splice(i, 1);
        }
      }
    }
  }
  return compTasks;
};

console.log(taskSchedule(schedules));
