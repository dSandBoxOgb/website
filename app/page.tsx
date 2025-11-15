import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Star,
  Users,
  Palette,
  Code,
  Search,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/common/nav";
import Footer from "@/components/common/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            A{" "}
            <span className="text-orange-500 relative">
              Creative Playground
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200 opacity-50"></div>
            </span>
            <br />
            For Designers
          </h1>
          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              dSandBox is a global design and innovation ecosystem built to
              empower designers through creativity, connection, and
              collaboration. We’re shaping the next generation of creative
              thinkers and problem-solvers
            </p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>

        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading companies</p>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              About dSandBox
            </h2>
            <div>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                dSandBox, Ogbomoso is a design and innovation community built
                exclusively for designers — a space where creativity,
                collaboration, and growth come together.
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We provide a sandbox for designers to learn, experiment, and
                build meaningful experiences through workshops, design meetups,
                portfolio reviews, and collaborative design challenges.
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our goal is to nurture and showcase world-class design talent
                from Ogbomoso, helping creatives sharpen their skills, connect
                with industry peers, and grow into globally recognized
                designers.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-3 max-w-96 border m-auto mb-16">
            <p>Lorem Ipsum</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black text-white">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-300">
                  Choose a plan and share your design project details with us:
                  we’re here to listen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black text-white">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-gray-300">
                  Sit back and relax: our expert designers will turn your vision
                  into reality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black text-white">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Grow</h3>
                <p className="text-gray-300">
                  Your subscription ensures you have continuous access to our
                  design team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-3 max-w-96 border m-auto mb-16">
            <p>Lorem Ipsum</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-blue-500 text-white rounded-lg shadow"
              >
                UI/UX Design
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-3 max-w-96 border m-auto mb-16">
            <p>dSandbox</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check out Various Communities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="w-full h-48 bg-gray-300"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Ogbomosho community
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nisl enim quisque amet
                  ac. Nullam pellentesque iaculis et eleifend enim. Pellentesque
                  porttitor et senectus egestas tellus nunc nam nisi viverra.
                  Convallis pellentesque non vel in.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="w-full h-48 bg-purple-300"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Ibadan Community</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nisl enim quisque amet
                  ac. Nullam pellentesque iaculis et eleifend enim. Pellentesque
                  porttitor et senectus egestas tellus nunc nam nisi viverra.
                  Convallis pellentesque non vel in.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gray-900 text-white">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">
                    Osogbo Community
                  </h3>
                  <p>Comming Soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-3 max-w-96 border m-auto mb-16">
            <p>dSandbox</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testimonials From Our Communities
            </h2>
          </div>
          <div className="flex w-full border">
            <div className="flex-1">
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"></p>
            </div>
            <div className="flex-2 p-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex h-64 items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="relative float-end mr-16 mt-8 gap-3">
                  <CarouselPrevious className="" />
                  <CarouselNext className="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className=" rounded-2xl p-12 text-cente">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Subscribe to our Newsletter
            </h2>
            <p className=" mb-8  mx-auto text-center max-w-md">
              Subscribe for Updates: Stay informed about the latest investor
              updates, financial results, and announcements by subscribing to
              our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
