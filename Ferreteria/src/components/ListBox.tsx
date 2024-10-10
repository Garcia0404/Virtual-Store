import {Listbox, ListboxItem} from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";

export const ListBox = () => {
  const items = [
    {
      key: "new",
      label: "Ver Inventario",
    },
    {
      key: "edit",
      label: "Configuración",
    },
    {
      key: "Log Out",
      label: "Delete file",
    }
  ];

  return (
    <ListboxWrapper>
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        onAction={(key) => alert(key)}
      >
        {(item) => (
          <ListboxItem
            key={item.key}
            color={item.key === "Log Out" ? "danger" : "default"}
            className={item.key === "Log Out" ? "text-danger" : ""}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}