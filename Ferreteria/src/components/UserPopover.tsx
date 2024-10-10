import {Popover, PopoverTrigger, PopoverContent, User} from "@nextui-org/react";
import { ListBox } from "./ListBox";

export const UserPopover = ()  => {
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Zoe Lang"
          description="Product Designer"
          className="transition-transform md:flex hidden"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <ListBox/>
      </PopoverContent>
    </Popover>
  );
}