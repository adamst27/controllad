import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionDiv";
export default function Home() {
  const variants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary relative">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        <div className="z-10 w-3/4 h-[500px] items-center justify-center text-sm text-center gap-4 relative overflow-hidden flex flex-col">
          <div className="overflow-hidden h-11 w-full">
            <MotionDiv
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.1,
                ease: "easeIn",
              }}
              viewport={{ once: false }}
              className="relative"
            >
              <h1 className="text-5xl font text-secondary">Controllad</h1>
            </MotionDiv>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              A general purpose management system crafted specifically for your
              needs:
            </p>
          </div>

          <Button className="h-8">
            Get Started <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </>
  );
}
