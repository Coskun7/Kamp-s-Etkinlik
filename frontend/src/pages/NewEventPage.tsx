import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";

const emptyFormData: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  capacity: "",
  description: "",
};

function NewEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <EventForm
      initialData={emptyFormData}
      submitText="Kaydet"
      onSubmit={(data) => {
        addEvent(data);
        navigate("/admin");
      }}
    />
  );
}

export default NewEventPage;

