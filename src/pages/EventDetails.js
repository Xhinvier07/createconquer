// Tab functionality for the program flow section
export const initEventDetails = () => {
  // Function to handle tab switching
  const handleTabSwitch = () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const programSchedules = document.querySelectorAll('.program-schedule');
    
    if (tabButtons.length === 0 || programSchedules.length === 0) {
      // If elements aren't found yet, try again after a short delay
      setTimeout(handleTabSwitch, 100);
      return;
    }
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and schedules
        tabButtons.forEach(btn => btn.classList.remove('active'));
        programSchedules.forEach(schedule => schedule.classList.remove('active'));
        
        // Add active class to clicked button and corresponding schedule
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        const targetSchedule = document.getElementById(targetId);
        
        if (targetSchedule) {
          targetSchedule.classList.add('active');
        } else {
          console.error(`Target schedule with ID "${targetId}" not found`);
        }
      });
    });
  };

  // Try to initialize the tab functionality
  handleTabSwitch();
}; 