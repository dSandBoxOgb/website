import SectionBadge from "@/components/common/section_badge";
// import classNames from "classnames";

// components/features/home/CategoriesSection.tsx
export default function CategoriesSection() {
  const categories = [
    { name: "UI/UX Design" },
    { name: "Wordpress Designers" },
    { name: "Framer Designers" },
    { name: "Graphic Designers" },
    { name: "Shopify Designers" },
    { name: "Webflow Designers" },
    { name: "Framer Designers" },
  ];

  return (
    <section className="bg-[#111111] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <SectionBadge />

          {/* Main Title */}
          <h3 className="subtitle">Categories Of Designers</h3>

          {/* Description */}
          <p className="mx-auto mb-12 text-center text-lg leading-relaxed text-gray-400">
            dSandBox, Ogbomoso is a design and innovation community built
            exclusively for designers – a space where creativity, collaboration,
            and growth come together.
          </p>

          {/* Categories Grid - 3 columns layout */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                // className={"group flex cursor-pointer items-center justify-center space-x-3 rounded-2xl border-2 py-2.5 px-8", {
                //   "order-2 col-start-2": index == categories.length - 1
                // })}
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <path
                    d="M11.822 31.947a11.833 11.833 0 01-8.361-20.194l8.253-8.254a11.87 11.87 0 1116.832 16.742l-8.344 8.343a11.744 11.744 0 01-8.38 3.363zm8.272-29.221a9.153 9.153 0 00-6.473 2.68l-8.254 8.253a9.142 9.142 0 1012.929 12.93l8.254-8.255a9.153 9.153 0 00-6.456-15.608z"
                    fill="#727272"
                  />
                  <path
                    d="M17.469 15.835a1.33 1.33 0 01-.954-.396 1.349 1.349 0 010-1.906l3.49-3.488a1.347 1.347 0 012.236.414 1.349 1.349 0 01-.33 1.492l-3.49 3.488a1.33 1.33 0 01-.952.396z"
                    fill="#727272"
                  /> */}
                </svg>
                <span className={`font-medium text-gray-400 transition-colors`}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
