function outputNames(name, time) {
  return new Promise((resolve, reject) => {
    if (!name || !time) {
      reject("Cannot find names");
    }

    setTimeout(() => {
      resolve(name, time);
    }, time);
  });
}

const names = [
  {
    name: "john",
    time: 1500,
  },
  {
    name: "Ed",
    time: 2000,
  },
  {
    name: "Jane",
    time: 500,
  },
];

outputNames(names[0].name, names[0].time)
  .then((res) => {
    console.log(res);

    if (!res) {
      console.log("Names not found");
    }

    return outputNames(names[1].name, names[1].time);
  })
  .then((res) => {
    console.log(res);

    if (!res) {
      console.log("Names not found");
    }

    return outputNames(names[2].name, names[2].time);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
