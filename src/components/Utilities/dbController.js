// use local storage to manage cart data
const addToLocalStorage = breakTime => {
  let breakTimeObj = {};

  breakTimeObj = breakTime;

  localStorage.setItem('breakTimeObj', JSON.stringify(breakTimeObj));
};

const getStoredObj = () => {
  let breakTimeObj = 0;

  //get the shopping cart from local storage
  const storedbreakTimeObj = localStorage.getItem('breakTimeObj');

  if (storedbreakTimeObj) {
    breakTimeObj = JSON.parse(storedbreakTimeObj);
  }

  // console.log('inside controller:');
  // console.log(typeof breakTimeObj);

  return breakTimeObj;
};

export { addToLocalStorage, getStoredObj };
