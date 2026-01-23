"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldGroup, FieldLabel } from "@/components/ui/field";

import { Field, useForm } from "@tanstack/react-form";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Submit clicked", value);
    },
  });

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => (
                <div>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <input  id={field.name} name={field.name} type="text" value={field.state.value} onChange={(e)=>field.handleChange(e.target.value)} />
                </div>
              )}
            />
            <form.Field
              name="email"
              children={(field) => (
                <div>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <input  id={field.name} name={field.name} type="email" value={field.state.value} onChange={(e)=>field.handleChange(e.target.value)} />
                </div>
              )}
            />
            <form.Field
              name="password"
              children={(field) => (
                <div>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <input  id={field.name} type="text" name={field.name} value={field.state.value} onChange={(e)=>field.handleChange(e.target.value)} />
                </div>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button form="login-form" type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
