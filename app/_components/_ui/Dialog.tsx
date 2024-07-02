"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegPlusSquare } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlinePhotoLibrary,
} from "react-icons/md";
import Image from "next/image";
import usePost from "@/app/_services/post";
import { PostRequest } from "@/app/_interfaces/post";
import pb from "@/app/_services/pocketbase";

function Dialogs() {
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();

  const { Store } = usePost();

  function getImage($event: React.FormEvent<HTMLInputElement>) {
    const target = $event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  const user = pb.authStore.model?.id;

  async function Simpan() {
    const payload: PostRequest = {
      caption: caption,
      image: image,
      user: user,
    };

    console.log(payload);

    await Store(payload);
  }

  function clearAll() {
    setPreview(null);
    setImage(undefined);
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="flex cursor-pointer hover:bg-white hover:bg-opacity-15 py-2 mt-3 rounded-md transition-all px-2 duration-500 items-center gap-3 w-full">
          <FaRegPlusSquare className="icon" />
          <p className="text-white">Create</p>
        </DialogTrigger>
        <DialogContent className="bg-black border-none w-[712px] h-[512px]">
          <DialogHeader className="flex flex-col gap-5">
            <DialogTitle className="flex justify-between items-center">
              {preview ? (
                <MdOutlineKeyboardArrowLeft
                  onClick={() => clearAll()}
                  className="icon"
                />
              ) : (
                <></>
              )}
              <p className="text-white text-center">Create Post</p>
              {preview ? (
                <button
                  onClick={() => Simpan()}
                  className="text-blue-500 font-semibold"
                >
                  Share
                </button>
              ) : (
                <></>
              )}
            </DialogTitle>
            <DialogDescription>
              <div className="flex relative">
                <div className="flex justify-center gap-5 flex-col items-center min-h-full h-[464px] w-full">
                  {preview ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={preview}
                        alt="preview"
                        width={0}
                        height={0}
                        className="w-full h-full"
                      />
                      <form className="absolute bottom-0 bg-black bg-opacity-20 h-[175px] w-full">
                        <textarea
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                          name=""
                          id=""
                          className="w-full h-full p-2 focus:outline-none bg-black bg-opacity-60 text-white"
                          placeholder="Write caption"
                        ></textarea>
                      </form>
                    </div>
                  ) : (
                    <>
                      <MdOutlinePhotoLibrary className="w-12 h-12 text-white" />
                      <p className="text-white text-3xl">Drag photos here</p>
                      <label
                        className="text-white  bg-blue-500 py-2 px-2 rounded-md font-semibold text-center"
                        htmlFor="img"
                      >
                        <input
                          onChange={(e) => getImage(e)}
                          name="img"
                          id="img"
                          type="file"
                          className="hidden"
                          placeholder="Select from computer"
                        />
                        Select from computer
                      </label>
                    </>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dialogs;
