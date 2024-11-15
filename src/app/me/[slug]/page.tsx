import React from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Prose from "@/components/typography/prose-typography";
type Context = {
  params: {
    slug: string;
  };
};

export default function AboutME(context: Context) {
  // @ts-expect-error idgaf
  const slug = React.use(context.params).slug;

  const essayFolder = `./src/me`;
  const essayFile = `${essayFolder}/${slug}` + ".md";

  const Lcontent = fs.readFileSync(essayFile, "utf8");

  const content = matter(Lcontent).content;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <Prose>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Prose>
    </div>
  );
}
