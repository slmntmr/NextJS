import { wait } from "@/helpers/misc";
import React from "react";

const Page = async () => {
	await wait(5000);

	return (
		<div>
			<h1>Contact Page</h1>
		</div>
	);
};

export default Page;
