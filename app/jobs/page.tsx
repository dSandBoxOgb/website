import Hero from "@/components/common/Hero";
import { Input } from "@/components/ui/input";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <>
      <Hero title="Jobs Board" />
      <section className="space-y-5 py-15 p-5">
        <div className="flex justify-end">
          <Input placeholder="Search" className="w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Jobs;
