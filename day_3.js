// question 1. Move all zeroes to end of array

// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

// [1, 2, 0, -4, 3, 0, -5, 0];
// [1.1, 2.4, 0, 0.5, 3.6, 0.5, 6.5, 0];

// Method 1 - pushing the zero in the end of array

// function pushZero(arr) {
//   let count = 0; // Count of zero elements
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }

//   let arr1 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr1.push(arr[i]);
//     }
//   }

//   while (count--) {
//     arr1.push(0);
//   }

//   return arr1;
// }

// console.log(pushZero(arr));

// home assignment - to optimize performance of the above code - o(n), o(nlog(n)) , o(logn)

// question 2. Segregate even and odd numbers

// Input: arr[] = 1 9 5 3 2 6 7 11
// Output: 2 6 5 3 1 9 7 11

// Input: arr[] = 1 3 2 4 7 6 9 10
// Output:  2 4 6 10 7 1 9 3

// method 1- unshift array and push

// method 2 - separate event and odd and merge array (divide and conquer)  extra space

// method 3 - splice methods to replace even and odd numbers  without extra space

// method 4 - two pointer approach

// question 3. Find the largest three distinct elements in an array

// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23
