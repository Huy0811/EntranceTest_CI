let input = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

function allLongestStrings(arr) {
  let longestString = arr[0];
  let longestStringsList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longestString.length) {
      longestStringsList.push(arr[i]);
    }
  }
  console.log(longestStringsList);
}

allLongestStrings(input);
