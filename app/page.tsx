import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';
import events from "@/lib/constants"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


const page = async () => {
  'use cache'
  cacheLife('hours')
//   const response = await fetch("/api/events", {
//   cache: "no-store",
// });
// ;
//   const {events} = await response.json();
  
  return (
    <section>
      <h1 className='text-center'>The hub for Every Dev <br /> Event You Can't miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in one place!</p>
      <ExploreBtn />

      <div className="mt-7 space-y-7">
        <h3>Featured Events</h3>

        <ul className='events list-none'>
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key = {event.title} className ="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page