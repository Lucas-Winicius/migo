import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export default function Help() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold">Ajuda</h1>
        <p className="text-lg">Tenha aqui a resposta para as perguntas mais frequentes.</p>
      </div>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent><p dangerouslySetInnerHTML={{__html: faq.content }}  /></AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
