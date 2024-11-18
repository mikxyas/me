// @ts-no-check

import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Prose from "@/components/typography/prose-typography";

export default function AboutME(context) {
  // @ts-expect-error idgaf
  const slug = React.use(context.params).slug;

  const essayFolder = `./public/me`;
  const essayFile = `${essayFolder}/${slug}` + ".md";

  const Lcontent = fs.readFileSync(essayFile, "utf8");

  const content = matter(Lcontent).content;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <Prose>
        <Markdown>{content}</Markdown>
      </Prose>
    </div>
  );
}
