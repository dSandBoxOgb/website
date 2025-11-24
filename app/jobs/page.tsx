import Hero from "@/components/common/Hero";
import { Input } from "@/components/ui/input";
import JobCard from "./JobCard";

const JOBS = [
  {
    company: "Beacon Labs & Tech Solutions",
    title: "Intern Product Designer",
    salary: "Free Internship",
    location: "Nigeria",
    // title: "Intern Product Designer"
  },
];

const Jobs = () => {
  return (
    <>
      <Hero title="Jobs Board" />
      <section className="space-y-5 py-15 p-5">
        <div className="flex justify-end">
          <Input placeholder="Search" className="w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {JOBS.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Jobs;
