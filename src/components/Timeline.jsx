import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      date: 'June 9, 2025',
      title: 'Registration Opens',
      description: 'Registration begins at 9AM.'
    },
    {
      date: 'June 23, 2025',
      title: 'Registration Closes',
      description: 'Last day for team registrations at 11:59PM.'
    },
    {
      date: 'June 27, 2025',
      title: 'Orientation & Kickoff',
      description: 'Event kickoff, theme announcement, and more! From 8AM to 4PM.'
    },
    {
      date: 'June 30, 2025',
      title: 'Proposal Deadline',
      description: 'Deadline for all project proposals by 1PM.'
    },
    {
      date: 'July 1, 2025',
      title: 'Finalists Announcement',
      description: 'Top 8 finalists will be announced at 1PM.'
    },
    {
      date: 'July 4, 2025',
      title: 'Final Submission',
      description: 'Deadline for final project submissions by 11:59PM.'
    },
    {
      date: 'July 5, 2025',
      title: 'Demo Day & Awarding',
      description: 'Project demonstrations, judging, and awards ceremony from 8AM to 4PM.'
    }
  ];

  return (
    <div className="timeline">
      {timelineEvents.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-date">{event.date}</div>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 