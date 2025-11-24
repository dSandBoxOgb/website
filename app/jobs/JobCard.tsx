import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

const JobCard = ({
  job,
}: {
  job: {
    company: string;
    title: string;
    salary: string;
    location: string;
    // title: "Intern Product Designer"
  };
}) => {
  return (
    <div className="border space-y-5 p-3 rounded-xl hover:scale-105 transition-all cursor-pointer hover:bg-gray-50">
      <div className="flex items-center gap-2">
        {/* <Image
          src="/home/beacon-labs-logo.png"
          alt="Google Logo"
          className="size-"
          width={50}
          height={30}
        /> */}
        <div>
          <p className="font-bold">{job.company}</p>
          <p className="flex items-center gap-1">
            <MapPin className="size-4" />
            {job.location}
          </p>
        </div>
      </div>

      <div className="space-y-8"></div>

      <div>
        <p className="font-semibold">{job.title}</p>
        <p>Salary: {job.salary}</p>
      </div>

      <div className="flex justify-between">
        {/* <Button variant="outline">View Details</Button> */}
        <Button asChild>
          <a href="mailto:internship@beaconlabs.com.ng">Apply Now</a>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
