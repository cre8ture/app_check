import React from "react";

const Footer = () => {
return (
<footer className="bg-white rounded-lg shadow m-4">
<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-900">
created in 2023{" "}
<a href="https://github.com/cre8ture" className="hover:underline">
cre8ture: experiments in ed-tech: Github Link
</a>
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 dark:text-gray-800 sm:mt-0">
<li>
<a href="mailto:kak2594@g.harvard.edu" className="hover:underline">
Contact
</a>
</li>
</ul>
</div>
</footer>
);
};

export default Footer;