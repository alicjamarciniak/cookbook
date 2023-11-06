import { LoadingOverlay } from "@mantine/core";

export default function Loading() {
  // TODO: Add proper colors
  return (
    <LoadingOverlay
      visible
      zIndex={1000}
      overlayProps={{
        radius: "sm",
        blur: 2,
        color: "black",
        backgroundOpacity: 80,
      }}
      loaderProps={{
        color: "orange",
        type: "bars",
      }}
    />
  );
}
