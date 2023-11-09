import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { Button, Affix as MAffix, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const Affix = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MAffix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            className="!bg-dark-orange"
          >
            <ArrowSmallUpIcon height="1rem" />
            <span className="hidden md:flex ml-2">Scroll to top</span>
          </Button>
        )}
      </Transition>
    </MAffix>
  );
};

export default Affix;
