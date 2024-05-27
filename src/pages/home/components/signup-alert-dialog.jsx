import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <AlertDialog className="">
      <AlertDialogTrigger asChild>
        <Button variant="outline">Signup</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center font-semibold text-lg">
            Signup
          </AlertDialogTitle>
        </AlertDialogHeader>
        <Link
          to={"/user-signup"}
          className="self-center sm:min-w-[450px] text-white !text-center bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2  !mx-auto "
        >
          <span className="w-fit mx-auto">Signup as User</span>
        </Link>
        <Link
          to={"/partner-signup"}
          className="self-center sm:min-w-[450px] text-white !text-center bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2  !mx-auto "
        >
          <span className="w-fit mx-auto">Signup as Partner</span>
        </Link>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
