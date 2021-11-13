let input = [60, 40, 55, 75, 64];

function alternatingSums(arr) {
  let leftColumn = 0;
  let rightColumn = 0;
  let output = [];

  for (let i = 0; i < arr.length; i += 2) {
    leftColumn += arr[i];
  }
  for (let i = 1; i < arr.length; i += 2) {
    rightColumn += arr[i];
  }

  output.push(leftColumn, rightColumn);
  console.log(output);
}

alternatingSums(input);
