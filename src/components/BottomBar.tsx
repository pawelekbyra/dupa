import clsx from "clsx";

type BottomBarProps = {
  authorName: string;
  slideTitle: string;
  slideDescription: string;
};

const BottomBar = ({
  authorName,
  slideTitle,
  slideDescription,
}: BottomBarProps) => {
  return (
    <div
      className={clsx(
        "bottombar",
        "absolute bottom-0 left-0 w-full h-[var(--bottombar-base-height)] flex flex-col justify-start pt-3 pr-[75px] pb-3 pl-4 text-white z-[10050] bg-black bg-opacity-70"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-2.5 cursor-pointer flex items-center z-[10010]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-accent bg-opacity-30"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1 bg-accent rounded-sm"></div>
        <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2 w-full overflow-hidden">
          <strong className="text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
            {authorName}
          </strong>
          <span className="text-base font-normal leading-tight whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
            {slideTitle}
          </span>
        </div>
        <p className="text-sm leading-snug mt-1 overflow-hidden text-ellipsis line-clamp-2 whitespace-normal">
          {slideDescription}
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
