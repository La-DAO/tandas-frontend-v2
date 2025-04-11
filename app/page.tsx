'use client';

import React from "react";
import { Button } from "@/components/ui/button"


const page = () => {
  return (
    <div>hello world
      <Button onClick={() => alert('clickd')}>Click me</Button>
    </div>

  )
};

export default page;