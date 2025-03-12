import type { ImageShape } from "../api/image-api";
import Masonry from "react-layout-masonry";
import { AnimatePresence, type Variants, motion } from "motion/react";

const variants: Variants = {
  inital: () => ({
    y: 50,
    opacity: 0,
  }),
  animate: (column: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
  exit: (column: number) => ({
    y: -50,
    opacity: 0,
    transition: {
      duration: 1,
      delay: column * 0.2,
    },
  }),
};

type ImageGridItemProps = {
  images: ImageShape[];
};

function ImageGridItem(props: ImageGridItemProps) {
  return (
    <AnimatePresence key={Math.random()} mode="popLayout">
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={12}>
        {props.images.map((image) => {
          return (
            <motion.div
              variants={variants}
              initial="inital"
              animate={"animate"}
              exit="exit"
              className="flex flex-col gap-4"
            >
              <img
                key={image.url}
                src={image.url}
                className="rounded-md object-cover size-full"
              />
            </motion.div>
          );
        })}
      </Masonry>
    </AnimatePresence>
  );
}

export default ImageGridItem;
