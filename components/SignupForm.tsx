import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { handleSubmit, register } = useForm();

  const sendToMailchimp = values => {
    // POST to https://gmail.us4.list-manage.com/subscribe/post
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(sendToMailchimp)}
      className="border-black border-0 border-solid flex w-full flex-wrap"
    >
      <input type="hidden" name="u" value="15dffbb4e7180a4bc6d1c0083" />
      <input type="hidden" name="id" value="7f5b13a2ed" />
      <input
        // type="email"
        autoCapitalize="off"
        autoCorrect="off"
        name="MERGE0"
        id="MERGE0"
        ref={register}
        className="bg-gray-200 px-5 py-4 border-black border-r-0 border-solid flex-1"
        placeholder="bob@example.com"
      />
      <button type="submit" className="bg-gray-400 text-gray-700 hover:bg-black hover:text-white px-5 py-4 flex-1">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
