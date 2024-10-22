"use client";

import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { IoBookmarkOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Post } from "../_interfaces/post";
import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import { CommentDialog } from "./_ui/CommentsDialog";

interface PostsProps {
  data: Post;
}

function Posts({ data }: PostsProps) {
  const url = "http://127.0.0.1:8090";

  const [numberClicked, setNumberClickd] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const onClick = () => {
    setNumberClickd((angka: number | null) => angka! + 1);
    console.log(numberClicked);
    setLiked(true);

    setTimeout(() => {
      setNumberClickd(null);
    }, 1200);
  };

  const avatar = createAvatar(loreleiNeutral, {
    seed: data?.expand?.user?.username,
    // ... other options
  });

  const profilePicture = avatar.toDataUri();

  return (
    <section className="flex gap-5 flex-col w-[470px] h-[628px] border-b border-b-slate-800 my-3">
      <div className="flex items-center justify-between mx-2">
        <div className="flex items-center gap-4">
          <Image
            src={profilePicture}
            className="w-[32px] h-[32px] rounded-full"
            alt=""
            width={0}
            height={0}
          />
          <p className="text-white font-bold">{data?.expand?.user?.username}</p>
        </div>
        <div className="">
          <BsThreeDots className="icon" />
        </div>
      </div>
      <div className="w-[468px] h-[468px] relative">
        <Image
          onDoubleClick={onClick}
          src={`${url}/api/files/${data.collectionId}/${data.id}/${data.image}`}
          className="w-full h-full"
          alt=""
          width={0}
          height={0}
        />
        <AnimatePresence>
          {numberClicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: -200, opacity: 1, rotate: [-50, 0] }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              exit={{ opacity: 0 }}
            >
              <FaHeart className="w-32 h-32 text-red-500 bottom-[24px] left-[170px] absolute" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center mx-2">
        <div className="flex items-center gap-3">
          {liked ? (
            <FaHeart
              onClick={(prev) => setLiked(!prev)}
              className="w-6 h-6 text-red-500"
            />
          ) : (
            <IoHeartOutline onClick={() => setLiked(true)} className="icon" />
          )}

          <CommentDialog />
          <IoPaperPlaneOutline className="icon" />
        </div>
        <div className="">
          {bookmarked ? (
            <FaBookmark
              onClick={(prev) => setBookmarked(!prev)}
              className="icon"
            />
          ) : (
            <IoBookmarkOutline
              onClick={() => setBookmarked(true)}
              className="icon"
            />
          )}
        </div>
      </div>
      <div className="flex text-white gap-2">
        <p className="font-bold">@{data?.expand?.user?.username}</p>
        <p className="line-clamp-1">{data?.caption}</p>
      </div>
    </section>
  );
}

export default Posts;
