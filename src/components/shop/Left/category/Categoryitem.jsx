import React from "react";
import { Virtuoso } from "react-virtuoso";

const CategoryitemList = ({ cItem = [] }) => {
  return (
    <div className=" space-y-2">
      <Virtuoso
        style={{ height: "50vh" }}
        data={cItem}
        itemContent={(_, item) => (
          <div
            style={{
              padding: "0.5rem",
            }}
          >
            <div
              key={item.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                id={item}
                name="citem"
                className="w-5 h-5 bg-primary-500"
              />
              <label for={item} name="citem" className="body_sm_500">
                {item}
              </label>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CategoryitemList;
