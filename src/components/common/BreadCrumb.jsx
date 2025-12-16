import React from "react";
import { useLocation, Link } from "react-router";
import Container from './Container';

export const BreadCrumb = () => {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  const paths = segments.map((seg, i) => ({
    name: seg,
    path: "/" + segments.slice(0, i + 1).join("/")
  }));

  return (
    <div className="py-4 bg-gray-50">
     <Container>
       <div className="container">
        <div className="flex items-center">

          {/* Home */}
          <Link
            to="/"
            className="inline-block px-2 py-1 rounded-sm text-white_FFFFFF font-popins"
          >
            Home
          </Link>   

          {/* Breadcrumb Items */}
          {paths.map((item, index) => {
            const isLast = index === paths.length - 1;

            return (
              <div key={item.path} className="flex items-center">
                <span className=" text-xl">/</span>

                {isLast ? (
                  <span className=" text-white_FFFFFF font-popins px-1 py-1 rounded-sm">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className=" px-2 py-1 rounded-sm text-white_FFFFFF font-popins"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}

        </div>
      </div>
     </Container>
    </div>
  );
};
