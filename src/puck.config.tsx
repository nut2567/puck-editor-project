import PuckButton from "@/components/PuckButton";

export const puckConfig = {
  components: {
    PuckButton: {
      component: PuckButton,
      fields: {
        text: { type: "text", label: "Label", defaultValue: "Click me" },
        variant: {
          type: "select",
          label: "Bootstrap Variant",
          options: [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ],
          defaultValue: "primary",
        },
        className: {
          type: "text",
          label: "Custom CSS Class",
          defaultValue: "",
        },
      },
    },
  },
};
