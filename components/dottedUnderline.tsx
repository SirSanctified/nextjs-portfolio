import { cn } from "@/lib/utils";

type DottedUnderlineProps = {
  direction: "horizontal" | "vertical";
};
const DottedUnderline = ({ direction }: DottedUnderlineProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center justify-center",
        direction === "horizontal"
          ? "flex-row w-max mx-auto"
          : "flex-col h-max my-auto"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1",
          direction === "horizontal" ? " w-max flex-row" : "h-max flex-col"
        )}
      >
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
      </div>
      <div
        className={cn(
          "bg-gray-300",
          direction === "horizontal" ? " w-[170px] h-1" : "w-1 h-[100px]"
        )}
      />
      <div
        className={cn(
          "flex items-center gap-1 ",
          direction === "horizontal" ? "w-max flex-row" : "h-max flex-col"
        )}
      >
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
        <div className="w-[3px] h-1 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default DottedUnderline;
