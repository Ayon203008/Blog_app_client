import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";
import React from "react";

export default async function Home() {

  const {data}=await userService.getSession()
  console.log(data)

  return (
    <div>
      <Button>CLick here</Button>
    </div>
  );
}
