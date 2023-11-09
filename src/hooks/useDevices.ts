import { useMediaQuery } from "@mantine/hooks";

// TODO: use better option to detect device before page load
const useDevices = () => {
  const isMobile = useMediaQuery("(max-width: 768px)", true, {
    getInitialValueInEffect: false,
  });

  return { isMobile };
};

export default useDevices;
