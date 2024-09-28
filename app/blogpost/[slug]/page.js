import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Image from "next/image";

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "material-theme-ocean",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
      <p className="pl-4 mb-2 text-base italic border-l-4 border-gray-500">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="mb-4 text-sm italic text-gray-500">By {data.author}</p>
        <p className="mb-4 text-sm text-gray-500">{data.date}</p>
      </div>
      <Image
        src={data.image}
        width={500}
        height={500}
        quality={70}
        className="object-cover w-full h-64 my-4 md:w-1/2"
        alt={data.title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="w-full prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
