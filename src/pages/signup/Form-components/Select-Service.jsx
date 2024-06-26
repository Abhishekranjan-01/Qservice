import * as React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";
import { useDispatch, useSelector } from "react-redux";

const frameworks = [
  {
    value: "Electrician / Electronics",
    label: "Electrician / Electronics",
  },
  {
    value: "plumber",
    label: "Plumber",
  },
];
export default function SelectService({}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div className="relative ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select Service"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] sm:w-[400px] p-0">
          <Command>
            {/* <CommandInput placeholder="Search framework..." /> */}
            {/* <CommandEmpty>No city found.</CommandEmpty> */}
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandList key={framework.value}>
                  <CommandItem
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      // dispatch(
                      //   addCity(currentValue === value ? "" : currentValue)
                      // );
                      // dispatch(validateCity(true));
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                </CommandList>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {/* {!cityValidated && (
        <h4 className="absolute top-10 text-xs font-medium text-red-600">
          *City is required
        </h4>
      )} */}
    </div>
  );
}
