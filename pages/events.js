import { useRouter } from "next/router";
import { useState } from "react";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, {shallow: true})
  };
  return (
    <div className="container has-text-centered">
      <button onClick={fetchSportsEvents}> Sports Events</button>
      <h1 className="title">List of Events</h1>
      <div className="box">
        {events.map((e) => {
          return (
            <div key={e.id}>
              <h2 className="subtitle">
                {e.id} {e.title} | {e.category}
              </h2>
              <p className="subtitle">{e.description}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventList;

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`);

  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
