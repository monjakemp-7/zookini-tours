import { PageHero } from "@/components/PageHero";
import { termsPage } from "@/content/terms";

export const metadata = {
  title: { absolute: termsPage.tabTitle },
  description: termsPage.description,
};

export default function TermsPage() {
  const blocks: Array<{ kind: "h2" | "p" | "li"; text: string }> = [];
  let list: string[] = [];

  function flushList() {
    if (list.length === 0) return;
    blocks.push({ kind: "li", text: list.join("\n") });
    list = [];
  }

  for (const block of termsPage.blocks) {
    if (block.kind === "li") {
      list.push(block.text);
      continue;
    }
    flushList();
    blocks.push(block);
  }
  flushList();

  return (
    <>
      <PageHero eyebrow={termsPage.eyebrow} title={termsPage.title} lede={termsPage.lede} />
      <section className="band">
        <div className="wrap max-w-3xl space-y-6">
          {blocks.map((block) => {
            if (block.kind === "h2") {
              return (
                <h2 key={block.text} className="section-title pt-2">
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "li") {
              return (
                <ul key={block.text} className="list-disc space-y-2 pl-5">
                  {block.text.split("\n").map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={block.text}>{block.text}</p>;
          })}
        </div>
      </section>
    </>
  );
}
