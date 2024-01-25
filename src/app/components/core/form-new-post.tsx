"use client";
import { FormData } from "@/app/types/blog";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const inputClass =
  "w-full y-2 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          value={formData.title}
          placeholder="Enter the Title"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          value={formData.content}
          name="content"
          placeholder="Enter the Content"
          className={inputClass}
          onChange={handleChange}
        />
      </div>
      <button className="mb-4 bg-blue-500 px-3 py-4 w-full rounded-md text-white text-xl">
        Add blog{" "}
      </button>
    </form>
  );
};

export default FormNewPost;
