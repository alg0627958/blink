import * as React from "react";
import { NextPage } from "next";
import Girl from "../components/Girl";
import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";

const IndexPage: NextPage = () => {
  return (
    <div
      className="bg-blue-200 min-h-screen flex md:items-center justify-center"
      style={{
        backgroundImage: "linear-gradient( 109.6deg,  rgba(31,179,237,1) 11.2%, rgba(17,106,197,1) 91.1% )"
      }}
    >
      <div className="mx-auto w-full max-w-xl my-16 mx-4 py-16">
        <div
          className="bg-white border-solid border-black border-4 flex flex-col justify-content items-center mx-4"
          style={{ boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
        >
          <Logo className="w-64 -mt-24" width="300px" height="150px" style={{ transform: "translateY(0px)" }} />

          <div className="p-4 md:p-16 md:pt-8 flex flex-col justify-center items-center relative">
            <div className="mb-8">
              <p>Dear improvisers!</p>
              <p className="pt-6">
                We're organising an exciting new improv festival to be held <strong>12 – 14 June 2020</strong> at
                the{" "}
                <a href="https://spektakel.wien/" className="font-bold hover:underline">
                  Spektakel Theatre
                </a>{" "}
                in Vienna, Austria. There will be workshops, jam sessions and performances in both English and
                German.
              </p>
              <p className="pt-6">To stay informed please join our mailing list.</p>
              <p className="pt-4 text-right text-gray-500">-- Christof, Hanni, Shawn, Florian, Coline and Ben</p>
            </div>

            <SignupForm />
            {/* <Girl className="md:hidden bottom-0 left-0 block absolute" style={{ opacity: "5%" }} /> */}
          </div>
        </div>
      </div>
      <Girl className="hidden bottom-0 left-0 md:block fixed" />
    </div>
  );
};

export default IndexPage;
