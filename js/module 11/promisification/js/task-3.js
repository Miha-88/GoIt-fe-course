export const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const makeTransaction = (transaction) => {
  console.log("transaction", transaction);
  const delay = randomIntegerFromInterval(200, 500);
  const promise = new Promise((resolved, rejected) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolved({ id: transaction.id, time: delay });
      } else {
        rejected(transaction.id);
      }
    }, delay);
  });
  return promise;
};

export const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time} ms`);
};

export const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
