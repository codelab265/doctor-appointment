import React from "react";
import { Button } from "./ui/button";

function Hero() {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl py-8 sm:py-12 lg:py-16">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src="/assets/hero.jpg"
                            class="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl">
                            Find & book{" "}
                            <span class="text-primary">Appointment</span> with
                            your favourite{" "}
                            <span class="text-primary">Doctor</span>
                        </h2>

                        <p class="mt-4 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aut qui hic atque tenetur quis eius quos ea
                            neque sunt, accusantium soluta minus veniam tempora
                            deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <Button className="mt-8">Explore now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
