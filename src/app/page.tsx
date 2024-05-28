import {
  MoveRight,
  BarChart4,
  Building,
  Clock,
  ListTodo,
  Folder,
} from "lucide-react";
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
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,hsl(var(--primary))_40%,#63e_100%)]" />
        <div className="z-10 w-3/4 h-[500px] items-center justify-center text-sm text-center gap-4 relative flex flex-col">
          <MotionDiv 
          className="h-14 w-14 rounded-lg  absolute top-10 left-4 bg-white flex justify-center items-center"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: false, amount: 0.5 }}
          >
            <BarChart4 className="h-8 w-8" />
          </MotionDiv>
          <MotionDiv 
          className="h-14 w-14 rounded-lg  absolute top-10 right-4 bg-white flex justify-center items-center"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: false, amount: 0.5 }}
          >
            <Folder className="h-8 w-8" />
          </MotionDiv>

          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative"
          >
            <h1 className="xl:text-8xl lg:text-5xl text-2xl font text-secondary">
              Manage{" "}
              <span className="block text-accent">Anywhere, Everywhere</span>
            </h1>
          </MotionDiv>

          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative"
          >
            <p className="text-sm text-gray-500">
              Manage your projects and tasks from anywhere.
            </p>
          </MotionDiv>
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeIn",
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative"
          >
            <Button className="h-8">
              Get Started <MoveRight className="ml-2 h-4 w-4" />
            </Button>
          </MotionDiv>
        </div>
      </main>
    </>
  );
}
