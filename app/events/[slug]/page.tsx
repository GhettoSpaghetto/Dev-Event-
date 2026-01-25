import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

export default function Page(props: any) {
  return (
    <Suspense fallback={<div className="p-10">Loading event… ⏳</div>}>
      <EventDetails {...props} />
    </Suspense>
  );
}
