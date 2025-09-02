const MoveZeros = function (nums) {
  let movPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[movPos] = nums[i];
      movPos++;
    }
  }
  while (movPos < nums.length) {
    nums[movPos] = 0;
    movPos++;
  }
  return nums;
};

const arr = [2, 5, 0, 5, 3, 0, 4, 5, 6];
console.log(arr);
console.log(MoveZeros(arr));
