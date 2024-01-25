"use client"
import React, { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState<string>("");
  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleSubmitComment=()=>{
    console.log(comment)
  }
  return (
    <div className="mt-4">
      3
      <label
        htmlFor="comment"
        className="block  bg-blue-400 w-36 rounded-md shadow-lg text-white p-3 cursor-pointer"
      >
        Add Comments
      </label>
      <input
        value={comment}
        onChange={handleComment}
        type="text"
        className="bg-white w-full mt-3 rounded-sm p-2 shadow-xl"
        name="comment"
      />
      <button onClick={handleSubmitComment} className="block mt-3 bg-blue-500 w-48 rounded-md shadow-lg text-white p-3 cursor-pointer">
        Submit comment
      </button>
    </div>
  );
};

export default FormComment;
