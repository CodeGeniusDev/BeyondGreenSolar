import { cn } from "@/app/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridBox() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 1 || i === 1 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "HYBRID SOLAR SYSTEM IN PAKISTAN",
    description: "What is a Hybrid Solar System?Living in Pakistan comes with an added package of frequent load shedding and high electricity…",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2024/08/Untitled-1-1-1024x536.jpg"
        alt="Innovation"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-[#019D4D]" />,
  },
  {
    title: "Solar MD SS4143: Revolutionizing Energy Storage with Lithium Iron Phosphate Batteries",
    description: "In today’s world, the demand for efficient, reliable, and long-lasting energy storage solutions is growing rapidly. One of the game-changing…",
    header: (
      <img
        src="https://beyondgreensolar.com/wp-content/uploads/2024/08/Untitled-1-2-1024x536.jpg"
        alt="Digital Revolution"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-[#019D4D]" />,
  },
];

export default function FifthSection() {
  return (
    <div className="py-20 bg-[#ebebeb]">
      <div className="mb-12">
        <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
          Latest <span className="text-[#019D4D]">Blogs</span>
        </h4>
        <h2 className="text-4xl font-bold text-center mb-8 text-[#019D4D]">
          The Dawn of Innovation
        </h2>
        <p className="text-center text-lg text-[#333333]">
          Explore the birth of groundbreaking ideas and inventions.
        </p>
      </div>
      <BentoGridBox />
    </div>
  );
}