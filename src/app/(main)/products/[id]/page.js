import React from "react";

const Page = ({ params, searchParams }) => {
	console.log("PARAMS", params.id);
	console.log("CATID=", searchParams.catid);

	return <div>Product Details Page  <Product catId={searchParams.catid}/></div>;
};

export default Page;
