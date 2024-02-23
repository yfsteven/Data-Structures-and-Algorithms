const binarySearch = (arr, target, start, end) => {
    if (start > end) {
        return "N/A";
    }

    const middle = Math.floor((start + end)/2);

    if(arr[middle] === target) {
        return middle;
    }
    else if(arr[middle] > target){
        return binarySearch(arr, target, start, middle-1);
    } else {
        return binarySearch(arr, target, middle+1, end);
    }
}