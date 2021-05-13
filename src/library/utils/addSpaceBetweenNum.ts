const addSpaceBetweenNum = (num: string | number) => {
	const [beforeDotNum, afterDotNum] = num.toString().split('.');

	const numWithComma = beforeDotNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return [numWithComma, afterDotNum].join('.');
};

export default addSpaceBetweenNum;
