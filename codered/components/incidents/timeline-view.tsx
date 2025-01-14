import React from 'react';

const TimelineView = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-event-date">{event.date}</div>
          <div className="timeline-event-content">
            <h3 className="timeline-event-title">{event.title}</h3>
            <p className="timeline-event-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineView;
