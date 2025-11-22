import { Button } from "@/components/ui/button";

const DescriptionSection = ({ text }: { text?: string }) => {
  return (
    <section className="py-0!">
      <div className="space-y-3 mb-5">
        <p>{text ?? "No Description Available"}</p>
      </div>

      <Button asChild>
        <a href="#">Register</a>
      </Button>
    </section>
  );
};

export default DescriptionSection;
