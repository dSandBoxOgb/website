import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

const JobCard = () => {
  return (
    <div className="border space-y-5 p-3 rounded-xl hover:scale-105 transition-all cursor-pointer hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/google-logo.png"
          alt="Google Logo"
          className="size-8"
          width={50}
          height={30}
        />
        <div>
          <p>Google Inc</p>
          <p className="flex items-center gap-1">
            <MapPin className="size-4" /> New Delhi, India
          </p>
        </div>
      </div>

      <div className="space-y-8"></div>

      <div>
        <p>Graphics Designer</p>
        <p>Salary Range: 250, 000k - 500, 000</p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Apply Now</Button>
      </div>
    </div>
  );
};

export default JobCard;
