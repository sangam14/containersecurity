const ids = [
  "1586837691332599809"
  
];
const KEY = "support-tweet-index";

function getTweetId() {
  let index = +localStorage.getItem(KEY);

  if (Number.isNaN(index)) {
    index = Math.floor(Math.random() * ids.length);
  }

  const newIndex = index + 1 >= ids.length ? 0 : index + 1;
  console.log("old", index, "new", newIndex);
  localStorage.setItem(KEY, newIndex);

  return ids[index];
}

export default getTweetId;


