import React from "react";

function BreadCrumb() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="bg-transparent md:bg-white">
        <ol className="flex items-center gap-4">
          <li>تلفن همراه</li>
          <li>برند ایفون</li>
          <li>ایفون 13</li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
