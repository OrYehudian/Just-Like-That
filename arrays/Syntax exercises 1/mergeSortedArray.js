function mergeSortedArray(arr1, arr2, m, n){
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;

    while(second >= 0) {
        let firstVal = arr1[first];
        let secondVal = arr2[second];

        if(firstVal > secondVal) {
            arr1[i] = firstVal;
            i--;
            first--;
        }
        else {
            arr1[i] = secondVal;
            i--;
            second--;
        }

    }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
mergeSortedArray(nums1, nums2, m, n);
console.log(nums1);