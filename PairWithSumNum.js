function findPairWithMinSum(arr=[], X) {
 
		// Sort the array, you can use any sorting algorithm to sort it
		arr.sort();
		
		let n=arr.length;
		if(n<2)
			return;
	console.log("The pair whose sum is closest to 15 : ");
		// left and right index variables
		let l = 0, r = n - 1;
 
		while (l < r) {
			let currentSum = arr[l] + arr[r];
			if (currentSum == X) {
				console.log(arr[l] + " " + arr[r]);
				l++;
				r--;
			} else if (arr[l] + arr[r] < X)
				l++;
			else
				r--;
		}
 
	}


	findPairWithMinSum([-40, -5, 1, 3, 6, 7, 8, 20],15);