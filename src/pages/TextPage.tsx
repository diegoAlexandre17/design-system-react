import { Text } from "@/components/ui/text";

const TextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <Text variant="h1">Heading 1 — h1</Text>
      <Text variant="h2">Heading 2 — h2</Text>
      <Text variant="h3">Heading 3 — h3</Text>
      <Text variant="h4">Heading 4 — h4</Text>
      <Text variant="h5">Heading 5 — h5</Text>
      <Text variant="p">
        Paragraph — p. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text variant="span">Span — span inline text</Text>
      <Text variant="small">Small — small disclaimer text</Text>
      <Text variant="span-table">Span Table — 12px table cell text</Text>
      <Text variant="span-13">Texto de 13px</Text>
      <Text variant="span-15">Texto de 15px</Text>
    </div>
  );
};

export default TextPage;
