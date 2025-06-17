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
    
    // First, remove all existing event listeners by cloning and replacing all buttons
    tabButtons.forEach(button => {
      const clonedButton = button.cloneNode(true);
      button.parentNode.replaceChild(clonedButton, button);
    });
    
    // Get fresh references to the buttons after replacement
    const freshTabButtons = document.querySelectorAll('.tab-button');
    
    // Add click event listeners to the fresh buttons
    freshTabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and schedules
        freshTabButtons.forEach(btn => btn.classList.remove('active'));
        programSchedules.forEach(schedule => schedule.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get target ID and find corresponding schedule
        const targetId = button.getAttribute('data-target');
        const targetSchedule = document.getElementById(targetId);
        
        if (targetSchedule) {
          targetSchedule.classList.add('active');
        } else {
          console.error(`Target schedule with ID "${targetId}" not found`);
        }
      });
    });
    
    // Make sure the first tab is active by default
    if (freshTabButtons.length > 0 && programSchedules.length > 0) {
      const firstButton = freshTabButtons[0];
      const firstTargetId = firstButton.getAttribute('data-target');
      const firstSchedule = document.getElementById(firstTargetId);
      
      if (firstSchedule) {
        firstButton.classList.add('active');
        firstSchedule.classList.add('active');
      }
    }
  };

  // Try to initialize the tab functionality
  handleTabSwitch();
  
  // Try again after a short delay to ensure DOM is fully loaded
  setTimeout(handleTabSwitch, 500);
}; 