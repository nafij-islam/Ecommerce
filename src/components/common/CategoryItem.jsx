import React from "react";

const CategoryItem = ({item}) => {
  return (
    <div>
      <div className="border border-gray-50 py-3">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <picture>
            <img className="rounded max-w-[148px] max-h-[148px]"
              src="https://c8.alamy.com/comp/PTCN97/this-picute-is-of-the-early-moring-light-from-the-sunrise-shining-on-the-two-towers-of-tower-bridge-in-london-PTCN97.jpg"
              alt=""
            />
          </picture>
          <h2 className="body_md_500 text-gray-900">{item || "Not Availavle" }</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
