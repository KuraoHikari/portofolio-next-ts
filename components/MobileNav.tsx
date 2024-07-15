import { AlignLeft, AlignRight, ListMinus, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <ListMinus className="w-8 h-8 text-blue-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Kurao<span className="text-blue-400">Hikari</span>
            </h1>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
