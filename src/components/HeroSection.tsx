"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, MapPin, Wifi, Coffee, Utensils } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

export default function ShortletLanding() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6 mr-2" />
          <span className="font-bold">Shortlet Portharcourt</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#booking"
          >
            Book Now
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 flex flex-col items-center lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Experience Luxury in the Heart of the City
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover our premium shortlet apartment, perfect for your next
                  getaway or business trip.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto text-black px-4 md:px-6">
            <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Apartment Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Wifi className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">High-Speed WiFi</h3>
                <p className="text-gray-500">
                  Stay connected with our lightning-fast internet.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coffee className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Fully Equipped Kitchen
                </h3>
                <p className="text-gray-500">
                  Cook your favorite meals in our modern kitchen.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Utensils className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Premium Amenities</h3>
                <p className="text-gray-500">
                  Enjoy luxury toiletries and comfortable bedding.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Apartment Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Living Room"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Bedroom"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Kitchen"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Bathroom"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Balcony"
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Building Exterior"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section
          id="booking"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto text-black px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Book Your Stay
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required  className="bg-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                  className="bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <Label>Check-in Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start bg-transparent text-left font-normal ${
                        !date && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? date.toDateString() : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-black">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                       className="bg-transparent"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Special Requests</Label>
                <Textarea
                  id="message"
                  placeholder="Any special requirements or requests?"
                      className="bg-transparent"
                />
              </div>
              <Button className="w-full" type="submit">
                Book Now
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer  className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Shortlet Portharcourt All rights reserved.
        </p>
      </footer>
    </div>
  );
}
