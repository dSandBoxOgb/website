import classNames from "classnames";
import Image from "next/image";

const SectionBadge = ({
  align = "center",
  text = "dSandbox",
}: {
  align?: "left" | "center" | "right";
  text?: string;
}) => {
  return (
    <div
      className={classNames("mb-2 flex items-center gap-2", {
        "justify-start": align === "left",
        "justify-center": align === "center",
        "justify-end": align === "right",
      })}
    >
      <Image
        src={"/badge-icon.png"}
        alt="dSandBox badge"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <div className="text-main-700 inline-flex items-center justify-center rounded-full py-2 text-sm font-normal">
        {text}
      </div>
    </div>
  );
};

export default SectionBadge;
