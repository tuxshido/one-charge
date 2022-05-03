const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
	e.preventDefault();
	const inputM = document.querySelector("#m");
	const inputN = document.querySelector("#n");
	let m = parseInt(inputM.value);
	let n = parseInt(inputN.value);
	console.log(m);
	console.log(n);
	let arrM = [...Array(parseInt(m))]
		.map(() => Math.floor(Math.random() * 99))
		.sort(function (a, b) {
			return a - b;
		});
	let arrN = [...Array(parseInt(n))]
		.map(() => Math.floor(Math.random() * 99))
		.sort(function (a, b) {
			return a - b;
		});
	let answer = document.querySelector(".answer");
	console.log(arrM);
	console.log(arrN);
	answer.innerHTML =
		"Your sorted array are : [" + arrM + "] and [" + arrN + "]";
	let total = n + m;
	let index = total % 2 == 0 ? total / 2 - 1 : (total - 1) / 2;
	// index for arrM
	let mi = 0;
	// index for arrN
	let ni = 0;
	// result value
	let val;
	let res = [];

	if (arrN.length == 0) {
		// if N array is empty
		val = m % 2 == 0 ? (arrM[index] + arrM[index + 1]) / 2 : arrM[index];
	} else if (arrM.length == 0) {
		// if M array is empty
		val = n % 2 == 0 ? (arrN[index] + arrN[index + 1]) / 2 : arrN[index];
	} else if (total == 2) {
		// if only two value and array is empty
		val = (arrM[0] + arrN[0]) / 2;
	} else if (n < index + 1 && arrN[n - 1] < arrM[index - n]) {
		// if all the value of the N array is below the median
		val =
			total % 2 == 0
				? (arrM[index - n] + arrM[index - n + 1]) / 2
				: arrM[index - n];
	} else if (m < index + 1 && arrM[m - 1] < arrN[index - m]) {
		// if all the value of the M array is below the median
		val =
			total % 2 == 0
				? (arrN[index - m] + arrN[index - m + 1]) / 2
				: arrN[index - m];
	} else {
		if (total % 2 == 0) {
			// if the total is even, we have to calculate the average between the two central value
			for (let i = 0; i < index + 2; i++) {
				if (arrM[mi] < arrN[ni]) {
					res[i] = arrM[mi];
					mi++;
				} else {
					res[i] = arrN[ni];
					ni++;
				}
			}
			val = (res[index] + res[index + 1]) / 2;
		} else {
			// if the total is odd, we have to take the central value
			for (let i = 0; i < index + 1; i++) {
				if (arrM[mi] < arrN[ni]) {
					val = arrM[mi];
					mi++;
				} else {
					val = arrN[ni];
					ni++;
				}
			}
		}
	}
	answer.innerHTML +=
		"<br> " +
		// "total : " +
		// total +
		// "   index : " +
		// index +
		// "   m : " +
		// m +
		// "   n : " +
		// n +
		"  the median value is : " +
		val;
});
