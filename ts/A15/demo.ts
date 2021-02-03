enum Status {
  OFFLINE,
  ONLINE = 4,
  DELETED,
}
console.log(Status[0]);
// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };

// function getResult(status) {
//   if (status === Status.OFFLINE) {
//     return "offline";
//   } else if (status === Status.ONLINE) {
//     return "onine";
//   } else if (status === Status.DELETED) {
//     return "deleted";
//   }
//   return "error";
// }
// const result = getResult(2);
// console.log(result);
