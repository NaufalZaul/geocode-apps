// import { dataCountry } from "../Storage/data";

let db = null;


function checkIndexedDB() {
  return 'indexedDB' in window;
}

function createIndexedDB() {

  let openDB = indexedDB.open("GeographyCountries", 2)
  openDB.onerror = (e) => {
    console.error(`Error Database : ${e.target.errorCode}`)
  };
  openDB.onupgradeneeded = (e) => {
    console.log('success upgrade IndexedDB')
    db = e.target.result;
    const objectStore = db.createObjectStore("geography", { keyPath: "country" });
    objectStore.createIndex('latitude', 'latitude', { unique: false })
    objectStore.createIndex('longitude', 'longitude', { unique: false })
    objectStore.createIndex('nameCountry', 'nameCountry', { unique: false })

    objectStore.transaction.oncompleted = () => {
      console.log('success transaction onupgrade')
    }
  };
  openDB.onsuccess = (e) => {
    console.log('success create IndexedDB')
    db = e.target.result;

    const transactionData = db.transaction("geography", "readwrite");
    transactionData.oncomplete = () => console.log('success transaction');
    transactionData.onerror = (err) => console.error(`error:${err.message}`);

    const objectStore = transactionData.objectStore("geography");

    // const addObject = objectStore.add({});
    // addObject.onsuccess = () => console.log('success add data')
    // addObject.onerror = (err) => console.error(`error : ${err.message}`)
    // dataCountry.map((e, y) => {
    //   // if (y < 192) {
    //   // size += JSON.stringify(e).length
    //   // }
    // })
    // console.log(size)
  };

}


function addDataToIndexedDB() {
  // const transactionData = db.transaction("geography", "readwrite");
  // console.log(transactionData);
  // transactionData.onerror = (err) => console.error(`error:${err}`);
  // transactionData.oncomplete = () => console.log('success transaction');

  //   const objectStore = transactionData.objectStore("geography");

  //   const addObject = objectStore.add(dataCountry);
  //   addObject.onsuccess = () => console.log('success add data')
  //   addObject.onerror = (err) => console.error(`error : ${err}`)
}


export default function IndexedDB(datas) {
  if (!checkIndexedDB()) throw new Error('IndexedDB Undefined');
  console.log('ini indexed db')
  console.log(datas)
  // createIndexedDB();
  // addDataToIndexedDB();
}