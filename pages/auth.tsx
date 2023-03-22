import Image from "next/image";
import { useCallback, useState } from "react";

import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div
      className="
        relative
        h-full
        w-full
        bg-[url('/images/hero.jpg')]
        bg-no-repeat
        bg-center
        bg-fixed
        bg-cover"
    >
      <div
        className="
            bg-black
            w-full 
            h-full
            lg:bg-opacity-70"
      >
        <nav className="px-12 h-24 relative">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill
            className="object-left object-contain px-12 py-5"
          />
        </nav>
        <div className="flex justify-center">
          <div
            className="
                bg-black/70
                px-16
                py-16
                self-center
                mt-2
                lg:w-2/5
                lg:max-w-md
                rounded-md
                w-full"
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              )}
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </div>
            <button
              className="
                    bg-red-600
                    py-3
                    text-white
                    rounded-md
                    w-full
                    mt-10
                    hover:bg-red-700
                    transition
                    font-semibold"
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
      Auth
    </div>
  );
};

export default Auth;
