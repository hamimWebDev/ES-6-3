// promise

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "welcome to next level developer";
    const error = false;

    if (!error) {
      resolve(data);
    } else {
      reject("Goodbye developer, This is danger");
    }
  }, 2000);
});

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
