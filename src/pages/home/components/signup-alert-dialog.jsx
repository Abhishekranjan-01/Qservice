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

        <Link to={"/user-signup"} className="self-center  me-2  !mx-auto">
          <AlertDialogCancel className="sm:min-w-[450px] bg-[#050708] hover:bg-[#050708]/90 rounded-lg">
            <span className="w-fit mx-auto  text-white !text-center">
              Signup as User
            </span>
          </AlertDialogCancel>
        </Link>

        <Link
          to={"/partner-signup/basic+information"}
          className="self-center  me-2  !mx-auto"
        >
          <AlertDialogCancel className="sm:min-w-[450px] bg-[#050708] hover:bg-[#050708]/90 rounded-lg">
            <span className="w-fit mx-auto  text-white !text-center">
              Signup as Partner
            </span>
          </AlertDialogCancel>
        </Link>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
