const sliceOfCount = (arr: any[], count: number, start: number = 0) => {
	const newArr = [];
	let c = 0;

	for (let i = start; i < arr.length; i += 1) {
		if (c === count) {
			break;
		}

		newArr.push(arr[i]);
		c += 1;

		if (i === arr.length - 1) {
			i = -1;
		}
	}

	return newArr;
};

export default sliceOfCount;
