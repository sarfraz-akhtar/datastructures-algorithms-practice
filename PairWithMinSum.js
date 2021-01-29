function findPairWithMinSum(arr=[]) {
 
		// Sort the array, you can use any sorting algorithm to sort it
		arr.sort();
		let sum=0; 
		let minimumSum = Number.MAX_SAFE_INTEGER;
		let n=arr.length;
		if(n<0)
			return;
		// left and right index variables
		let l = 0, r = n-1;
 
		// variables to keep track of the left and right index pair for minimumSum
		let minLeft = l, minRight = n-1;
 
		while(l < r)
		{
			sum = arr[l] + arr[r];
 
			/*If abs(sum) is less than min sum, we need to update sum and pair */
			if(Math.abs(sum) < Math.abs(minimumSum))
			{
				minimumSum = sum;
				minLeft = l;
				minRight = r;
			}
			if(sum < 0)
				l++;
			else
				r--;
		}
 
		console.log(" The pair whose sum is minimun : "+arr[minLeft]+" "+ arr[minRight]);
	}


	findPairWithMinSum([1,30,-5,70,-8,20,-40,60]);