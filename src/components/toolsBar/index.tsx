import { GripVertical } from "lucide-react";
import { ActionBar, ComponentConfig } from "@measured/puck";

export const overrides: {
  actionBar: (props: {
    children: React.ReactNode;
    label?: string;
    parentAction: React.ReactNode;
  }) => React.ReactElement;
} = {
  actionBar: ({ children, label, parentAction }) => (
    <ActionBar label={label}>
      <ActionBar.Group>
        {parentAction}
        {children}
        <ActionBar.Action onClick={() => console.log("Move action triggered!")}>
          <GripVertical size={16} />
        </ActionBar.Action>
      </ActionBar.Group>
    </ActionBar>
  ),
};
