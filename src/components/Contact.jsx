import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useState } from "react";

const REQUIRED_MESSAGE = "This field is required";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, REQUIRED_MESSAGE)
    .max(20, "Name can't have more than 20 charachters"),
  email: z.string().min(1, REQUIRED_MESSAGE).email(),
  message: z
    .string()
    .min(1, REQUIRED_MESSAGE)
    .max(250, "Message can't have more than 250 charachters"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = (fieldValues) => {
    setLoading(true);

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: fieldValues.name,
          to_name: "Tofik Elias",
          from_email: fieldValues.email,
          to_email: "eleltofik@gmail.com",
          message: fieldValues.message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(flase);
        reset();
        toast.success("Message was sent successfully");
      })
      .catch(() => {
        setLoading(flase);
        toast.error("Couldn't send your message");
      })
      .finally(() => {
        setLoading(flase);
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              {...register("name")}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-600 mt-2">{errors.name?.message}</p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              {...register("email")}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-600 mt-2">{errors.email?.message}</p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              {...register("message")}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-red-600 mt-2">{errors.message?.message}</p>
          </label>

          <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
