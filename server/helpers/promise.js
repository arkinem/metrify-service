const allSkippingErrors = (promises) => {
	return Promise.all(promises.map((p) => p.catch((error) => null)));
};

export { allSkippingErrors };
