import Image from "next/image";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
    } catch (error) {
      console.log(error);
    }
    login();
  }, [email, name, password]);

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
            lg:bg-black/70"
      >
        <nav className="px-12 py-6">
          <div className="h-10 relative">
            <Image
              src="/images/logo.png"
              fill
              className="object-contain object-left"
              alt="logo"
            />
          </div>
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
              onClick={variant === "login" ? login : register}
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
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
              >
                <FaGithub size={30} />
              </div>
            </div>
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
