"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

function ContactForm({ text, color, text2 }) {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="l_bottom w-[100%]  bg-white p-4 rounded-md shadow-md">
      <h3 className="text-[16px] font-[600] mb-4">{text2}</h3>
      <Form {...form}>
        <form className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" required placeholder="Full name" />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <FormField
                control={form.control}
                name="mob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        placeholder="+91 0485939054"
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        placeholder="ABC Technologies PVT LTD Company"
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        required
                        placeholder="demoaccount@gmail.com"
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" style={{ background: color }}>
            {text}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;

