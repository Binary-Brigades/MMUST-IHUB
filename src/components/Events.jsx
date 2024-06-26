import React from "react";
import Divider from "./Divider";

function Events() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white" id="events">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <Divider text="Events" />
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  mt-8">
            Join us at our upcoming events. We look forward to seeing you there!
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm bg-[#6D6DAA] text-left"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Event 1
              </h3>
            </div>
            <div className="p-6">
              <p>Date: January 30, 2024</p>
              <p>Time: 10:00 AM - 2:00 PM</p>
              <p>Location: New York City, NY</p>
              <p>
                Description: Join us for a fun-filled day of activities and
                networking at our annual event.
              </p>
            </div>
            <div className="flex items-center p-6">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm bg-[#6D6DAA] text-left"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Event 2
              </h3>
            </div>
            <div className="p-6">
              <p>Date: February 15, 2024</p>
              <p>Time: 1:00 PM - 5:00 PM</p>
              <p>Location: Los Angeles, CA</p>
              <p>
                Description: Don't miss out on our quarterly meetup where we
                discuss the latest trends and innovations.
              </p>
            </div>
            <div className="flex items-center p-6">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm bg-[#6D6DAA] text-left"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Event 3
              </h3>
            </div>
            <div className="p-6">
              <p>Date: March 10, 2024</p>
              <p>Time: 9:00 AM - 1:00 PM</p>
              <p>Location: Chicago, IL</p>
              <p>
                Description: Get ready for an exciting workshop where we'll dive
                deep into the world of AI.
              </p>
            </div>
            <div className="flex items-center p-6">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
