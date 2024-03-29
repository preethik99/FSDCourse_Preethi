function binarySearch(arr, target, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = ((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    } else  if (target > arr[mid]) {
        return binarySearch(arr, target, mid + 1, end);
    }
}


let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 3;
let resultIndex = binarySearch(arr, target, 0, arr.length - 1);
if (resultIndex !== -1) {
    console.log("Target", target, "found at index", resultIndex);
} else {
    console.log("Target", target, "not found in the array.");
}
