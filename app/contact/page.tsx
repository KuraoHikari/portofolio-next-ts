"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 8311 4227 556",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kuraoindra@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Bali, Indonesia",
  },
];
const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  async function submitHandler(data: any) {
    setIsLoading(true);
    try {
      await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with the server.",
      });
    }

    setIsLoading(false);
    // POST request
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 1,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-blue-400">
                <ReactTypingEffect
                  text={["Let's get in touch"]}
                  speed={100}
                  eraseSpeed={50}
                  eraseDelay={1500}
                  typingDelay={500}
                  cursorClassName="text-blue-400"
                  className="inline-block"
                />
              </h3>
              <p>
                We believe that great things happen when we work together.
                Whether you're looking for a partner to bring your vision to
                life, or just want to say hi
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  {...register("firstname")}
                  disabled={isLoading}
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  {...register("lastname")}
                  disabled={isLoading}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  {...register("email")}
                  disabled={isLoading}
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  {...register("phone")}
                  disabled={isLoading}
                />
              </div>

              <Textarea
                className="h-[200px]"
                placeholder="Message"
                {...register("message")}
                disabled={isLoading}
              />

              <Button
                variant="outline"
                size={"lg"}
                type="submit"
                className="max-w-56"
                disabled={isLoading}
              >
                Send Message <SendHorizonal className="ms-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-400 rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
