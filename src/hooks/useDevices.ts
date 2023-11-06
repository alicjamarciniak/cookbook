import { useMediaQuery } from "@mantine/hooks";

const useDevices = () => {
  const isMobile =
    useMediaQuery("(max-width: 768px)", false, {
      getInitialValueInEffect: false,
    }) ?? false;

  return { isMobile };
};

export default useDevices;
