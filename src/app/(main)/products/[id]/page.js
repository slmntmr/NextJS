import { notFound } from "next/navigation";
import React from "react";

const Page = ({ params, searchParams }) => {
	console.log("PARAMS", params.id);
	console.log("CATID=", searchParams.catid);

	if(params.id>100) notFound();

	return <div>Product Details Page</div>;
};

export default Page;
