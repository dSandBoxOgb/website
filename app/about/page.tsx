import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Hero from "@/components/common/Hero";

const AboutUs = () => {
  return (
    <>
      <Hero title="About Us" />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              About dSandBox
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                dSandBox is a digital marketing company that provides innovative
                solutions for businesses looking to establish their online
                presence. With years of experience in the industry, we have
                helped numerous companies achieve their digital marketing goals.
              </p>
              <p>
                Our team consists of talented professionals who are passionate
                about creating meaningful digital experiences. We believe in the
                power of technology to transform businesses and drive growth.
              </p>
              <p>
                From web design to digital marketing strategies, we offer
                comprehensive services that help our clients succeed in the
                digital landscape. Our approach is collaborative, ensuring that
                every project reflects our client&apos;s vision and goals.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-fu py-5 rounded-lg flex items-center justify-center">
              <Image
                src="/office-img.png"
                alt="Office Image"
                width={350}
                height={200}
                objectFit="fit"
                className=""
              />
            </div>
            {/* Floating testimonial card */}
            <Card className="absolute top-16 -right-6 w-72 bg-white/70  shadow-lg">
              <CardContent className="">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">
                      Exceptional technology solutions and services. We leverage
                      our large knowledge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute bottom-16 left-6 w-72 bg-white/70  shadow-lg">
              <CardContent className="">
                <div className="flex items-start space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">
                      Exceptional technology solutions and services. We leverage
                      our large knowledge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">
            Who we are
          </h2>

          <div className="space-y-8">
            {/* Team Member 1 */}
            <Card className="p-6">
              <CardContent className="flex items-start space-x-4 p-0">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>JH</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Jon Henrey
                  </h3>
                  <p className="text-orange-500 text-sm mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Jon founded dSandBox with a vision to help businesses thrive
                    in the digital world. With over 10 years of experience in
                    digital marketing, he leads our team with passion and
                    expertise.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="p-6">
              <CardContent className="flex items-start space-x-4 p-0">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Rebecca Brentwood
                  </h3>
                  <p className="text-orange-500 text-sm mb-3">
                    Creative Director
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rebecca brings creativity and innovation to every project.
                    Her background in design and user experience ensures that
                    our solutions are both beautiful and functional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="p-6">
              <CardContent className="flex items-start space-x-4 p-0">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Adam Sermons
                  </h3>
                  <p className="text-orange-500 text-sm mb-3">Technical Lead</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Adam oversees all technical aspects of our projects. His
                    expertise in web development and emerging technologies helps
                    us deliver cutting-edge solutions to our clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
