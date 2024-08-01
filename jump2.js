/* Approach
set jumpoCount = 0;
move further only if array lenght is greater than one
set current index
check if currentindexValue is enough to move to end or not
check how far it can move (new array) <these are candidates to be at>
find next index by looping through available options-
newIdxValue > currentindexValue - steps to reach that point
   -- nextIdxCandidate = newIdx 

move to newIndex 
increase jumpoCount

do this while current Index is not last index

return jump count */
var jump = function (nums) {
  let jumpCount = 0,
    lastIdx = nums.length - 1;
  if (!nums.length > 1) return jumpCount;

  let currentIdx = 0;
  while (currentIdx < lastIdx) {
    //if current value is enough to move to last
    if (nums[currentIdx] >= lastIdx - currentIdx) return ++jumpCount;

    let candidateIdxes = nums.slice(currentIdx + 1, nums[currentIdx] + 1);
    let nextIdx = currentIdx + 1;

    for (let i = 0; i < candidateIdxes.length; i++) {
      if (
        candidateIdxes[i] >
        nums[currentIdx] - i
        // && nums[nextIdx] >= nums[currentIdx]
      ) {
        if (candidateIdxes[i] >= nums[nextIdx]) nextIdx = currentIdx + i + 1;
      }
    }
    if (currentIdx !== nextIdx) currentIdx = nextIdx;
    else currentIdx++;
    ++jumpCount;
  }
};

jump([1, 2, 1, 1, 1]);

// var jump = function (nums) {
//   let jumpCount = 0,
//     currentPositionIndex = 0;

//   while (currentPositionIndex < nums.length - 1) {
//     if (nums[currentPositionIndex] <= nums.length - currentPositionIndex - 1) {
//       let newArray = nums.slice(
//         currentPositionIndex + 1,
//         currentPositionIndex + 1 + nums[currentPositionIndex]
//       );
//       let rightCandidateIdx = currentPositionIndex;

//       if(nums[currentPositionIndex]>=nums.length-1-currentPositionIndex)
//         return jumpCount;

//       for (let i = 0; i < newArray.length; i++) {
//         if ((newArray[i] > nums[rightCandidateIdx] + i+1) ) rightCandidateIdx = i;
//       }

//       currentPositionIndex += rightCandidateIdx + 1;
//       ++jumpCount;
//     } else return jumpCount;
//   }

//   return jumpCount;
// };
