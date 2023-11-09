"use client";

import { TextInput } from "@mantine/core";
import Image from "next/image";
import { showWorkInProgressToast } from "@/services/toasts";

const Footer = () => {
  return (
    <footer className="text-white font-extra-thin font-pt-sans ">
      <div className="from-light-black to-dark-green bg-gradient-to-r relative px-4 md:px-[150px] pt-[100px] pb-[50px] flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-48 md:mx-20">
          <div className="flex md:block justify-center">
            <Image
              src="/img/cookbook-logo.png"
              alt="cookbook logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                filter: "brightness(0.2) invert(1) grayscale()",
              }}
              className="opacity-50 md:opacity-100 w-[200px] h-auto"
            />
          </div>

          <div>
            <div className="flex flex-col sm:flex-row gap-10 md:gap-48 justify-center">
              <div>
                <h4 className="text-center text-lg font-bold">Follow us</h4>
                <div className="flex justify-center w-full h-[32px] gap-4 mt-4">
                  <a onClick={() => showWorkInProgressToast()}>
                    <Image
                      src={"/img/facebook.png"}
                      alt="facebook"
                      height={0}
                      width={0}
                      sizes="1"
                      style={{
                        filter: "invert(0.8) grayscale()",
                        width: 32,
                        height: 32,
                        maxWidth: 32,
                      }}
                    />
                  </a>
                  <a onClick={() => showWorkInProgressToast()}>
                    <Image
                      src={"/img/youtube.png"}
                      alt="youtube"
                      height={0}
                      width={0}
                      sizes="1"
                      style={{
                        filter: "invert(0.8) grayscale()",
                        width: 32,
                        height: 32,
                        maxWidth: 32,
                      }}
                    />
                  </a>
                  <a onClick={() => showWorkInProgressToast()}>
                    <Image
                      src={"/img/instagram.png"}
                      alt="instagram"
                      height={0}
                      width={0}
                      sizes="1"
                      style={{
                        filter: "invert(0.8) grayscale()",
                        width: "auto",
                        height: 32,
                        maxWidth: 32,
                      }}
                    />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-center text-xl font-bold mb-4">
                  Contact us
                </h4>
                <p>
                  44 Wallaby Way, Sydney
                  <br />
                  john.doe@cookbook.com
                  <br />+ (888) 555-4800
                </p>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col md:flex-row gap-4 border border-white/10 p-8 items-center">
              <TextInput
                label="Sign up for our newsletter!"
                placeholder="Type your email address"
                className="flex flex-col flex-grow gap-2 self-stretch [&>label]:text-lg"
              />
              <button
                onClick={showWorkInProgressToast}
                className="border text-sm py-3 px-6 rounded-full w-fit flex md:self-end"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 md:w-[50vw] border-white/10 mx-10 md:mx-20 mt-16">
          <p className="text-sm md:text-md text-center mt-2 opacity-50">
            Copyright &copy;2023 All rights reserved | This page was designed
            and made by Alicja Marciniak
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
