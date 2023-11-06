import { useWindowScroll } from "@mantine/hooks";
import { Affix as MAffix, Button, Transition } from "@mantine/core";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

const Affix = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MAffix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            color="orange"
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
