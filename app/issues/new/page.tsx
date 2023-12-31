"use client";

import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="container">
      <div className="max-w-xl space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>
      </div>
    </div>
  );
};

export default NewIssuePage;
