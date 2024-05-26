import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-secondary">
      <Link className="flex items-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Controllad</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-4 gap-4">
        <Link
          className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <Button variant="outline">Login</Button>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
