
# UniqueElementsExtractor
Javascript to extract unique elements in an array of numbers.

UniqueElementsExtractor  is a program that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.


UniqueElementsExtractor  checks the input array so that:


	•	N is an integer within the range [0..100,000];
	•	each element of array A is an integer within the range [−1,000,000..1,000,000].

Complexity:


UniqueElementsExtractor implements the top-down sort-merge algorithm to guarantee:

	•	expected worst-case time complexity is O(N*log(N));
	•	expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified. A text area is provided read/write. 
UniqueElementsExtractor will treat blank lines as non-numbers and return an error, so the input array A must consist of valid numbers only.

