
function binarySearch(arr, num) {
    let newElement;
    arr.forEach(element => {
        if (num === element) {
            newElement = element;
        }
    });
    if (num === newElement) {
        console.log("Element Found");
    } else {
        console.log("Element Not Found");
    }
}
binarySearch([1, 3, 5, 7, 8, 9], 5);
binarySearch([1, 3, 5, 7, 8, 9], 6);
