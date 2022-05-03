class ListNode {
	constructor(data) {
		if (data instanceof Array) {
			if (data.length > 1) {
				this.data = data.shift();
				this.next = new ListNode(data);
			} else {
				this.data = data[0];
				this.next = null;
			}
		} else {
			this.data = data;
			this.next = null;
		}
	}

	length() {
		// return the length of the linked elements
		return this.next ? 1 + this.next.length() : 1;
	}

	index(n) {
		// return the n-th element
		if (this.next) {
			return n > 1 ? this.next.index(n - 1) : this;
		} else {
			return n == 1 ? this : null;
		}
	}

	print_elem() {
		// print a single element and iniate the printing of the linked elements
		return this.next
			? this.data + ", " + this.next.print_elem()
			: this.data;
	}

	print() {
		// initiate the printing into a string process
		return this.data !== null ? "[ " + this.print_elem() + "]" : "[]";
	}
}

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
	e.preventDefault();
	const input = document.querySelector("input");
	let n = input.value;
	let arr = [...Array(parseInt(n)).keys()];
	let answer = document.querySelector(".answer");
	//answer.innerHTML = "Your input is : " + JSON.stringify(arr) + "<br>";
	console.log(arr);
	let nlist = new ListNode(arr);
	console.log(nlist);
	let str = nlist.print();
	console.log(str);
	answer.innerHTML = "The node list is : " + str + "<br>";
	n = nlist.length();
	let m = n % 2 == 0 ? n / 2 + 1 : (n + 1) / 2;
	nlist = nlist.index(m);
	str = nlist.print();
	answer.innerHTML += "the result is : " + str;
});
