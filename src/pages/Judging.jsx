import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../components/Section';
import Card from '../components/Card';
import ParticleBackground from '../components/ParticleBackground';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Judging = () => {
  const criteriaRef = useRef(null);
  const processRef = useRef(null);
  const prizesRef = useRef(null);
  
  // Animation setup with GSAP
  useEffect(() => {
    // Safety delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Criteria cards staggered animation
      if (criteriaRef.current) {
        const criteriaCards = criteriaRef.current.querySelectorAll('.card.criterion-card');
        if (criteriaCards && criteriaCards.length > 0) {
          gsap.from(criteriaCards, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: criteriaRef.current,
              start: "top 80%",
            }
          });
        }
      }
      
      // Process steps animation
      if (processRef.current) {
        const steps = processRef.current.querySelectorAll('.process-step');
        if (steps && steps.length > 0) {
          gsap.from(steps, {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 75%",
            }
          });
        }
      }
      
      // Prize cards animation
      if (prizesRef.current) {
        const prizeCards = prizesRef.current.querySelectorAll('.card.prize-card');
        if (prizeCards && prizeCards.length > 0) {
          gsap.from(prizeCards, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: prizesRef.current,
              start: "top 75%",
            }
          });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="judging-page">
      {/* Header Banner */}
      <section className="page-banner with-particle-bg">
        <ParticleBackground color="#00E676" opacity={0.3} />
        <div className="container">
          <h1>Judging & Prizes</h1>
          <p>Learn about how projects will be evaluated and the prizes you can win</p>
        </div>
      </section>

      <div className="main-content">
        {/* Judging Criteria */}
        <Section 
          title="Judging Criteria" 
          subtitle="All projects submitted at Create & Conquer 2025 will be evaluated based on the following criteria. Projects will be scored on a scale of 1-10 for each criterion, and the final score will be a weighted average based on the percentages indicated."
          className="judging-criteria-section"
          id="criteria"
        >
          <div className="criteria-grid grid grid-3" ref={criteriaRef}>
            <Card 
              title="Theme Relevance" 
              cardType="criterion"
              icon={<i className="fas fa-bullseye"></i>}
              iconClass="theme-icon"
              delay={0.1}
            >
              <p className="criterion-header">
                <span>How well does the project align with the hackathon theme?</span>
                <span className="criterion-weight">10%</span>
              </p>
              <div className="criterion-details">
                <h4>What judges look for:</h4>
                <ul>
                  <li>Clear connection to the theme</li>
                  <li>Thoughtful interpretation of the theme</li>
                  <li>Theme integration throughout the project</li>
                </ul>
              </div>
            </Card>

            <Card 
              title="Innovation & Creativity" 
              cardType="criterion"
              icon={<i className="fas fa-lightbulb"></i>}
              iconClass="innovation-icon"
              delay={0.2}
            >
              <p className="criterion-header">
                <span>How original and creative is the solution?</span>
                <span className="criterion-weight">30%</span>
              </p>
              <div className="criterion-details">
                <h4>What judges look for:</h4>
                <ul>
                  <li>Uniqueness of the idea</li>
                  <li>Creative approach to solving the problem</li>
                  <li>Differentiation from existing solutions</li>
                  <li>Innovative use of technology</li>
                </ul>
              </div>
            </Card>

            <Card 
              title="Impact" 
              cardType="criterion"
              icon={<i className="fas fa-chart-line"></i>}
              iconClass="impact-icon"
              delay={0.3}
            >
              <p className="criterion-header">
                <span>What is the potential impact of the solution?</span>
                <span className="criterion-weight">10%</span>
              </p>
              <div className="criterion-details">
                <h4>What judges look for:</h4>
                <ul>
                  <li>Potential social/economic impact</li>
                  <li>Scale of the problem being addressed</li>
                  <li>Effectiveness of the solution</li>
                  <li>Beneficiaries of the solution</li>
                </ul>
              </div>
            </Card>

            <Card 
              title="Execution" 
              cardType="criterion"
              icon={<i className="fas fa-cogs"></i>}
              iconClass="execution-icon"
              delay={0.4}
            >
              <p className="criterion-header">
                <span>How well was the solution implemented?</span>
                <span className="criterion-weight">30%</span>
              </p>
              <div className="criterion-details">
                <h4>What judges look for:</h4>
                <ul>
                  <li>Technical implementation quality</li>
                  <li>Functionality and completeness</li>
                  <li>User experience and design</li>
                  <li>Quality of the prototype or demo</li>
                </ul>
              </div>
            </Card>

            <Card 
              title="Relevance & Feasibility" 
              cardType="criterion"
              icon={<i className="fas fa-check-circle"></i>}
              iconClass="feasibility-icon"
              delay={0.5}
            >
              <p className="criterion-header">
                <span>How relevant and feasible is the solution?</span>
                <span className="criterion-weight">20%</span>
              </p>
              <div className="criterion-details">
                <h4>What judges look for:</h4>
                <ul>
                  <li>Practicality of the solution</li>
                  <li>Technical and economic feasibility</li>
                  <li>Scalability potential</li>
                  <li>Market fit and target audience</li>
                </ul>
              </div>
            </Card>
          </div>
        </Section>

        {/* Judging Process */}
        <Section 
          title="Judging Process" 
          className="judging-process-section bg-secondary"
          id="process"
        >
          <div className="process-steps" ref={processRef}>
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Submission</h3>
                <p>
                  Teams submit their proposals by June 30, 2025 (1:00 PM). This includes a proof of concept, 
                  project brief, and short video demo/presentation.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Preliminary Evaluation</h3>
                <p>
                  All proposals undergo an initial evaluation by the judging panel to identify the top 8 
                  projects that will proceed to the final round.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Finalist Announcement</h3>
                <p>
                  Top 8 finalists will be announced on July 1, 2025 (1:00 PM). Finalists will have until 
                  July 4, 2025 (11:59 PM) to submit their final outputs.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Live Presentations</h3>
                <p>
                  Finalists will present their projects live to the judges and audience on July 5, 2025 (8:00 AM - 12:00 PM). 
                  Each team will have 15 minutes for their presentation.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Final Deliberation & Awards</h3>
                <p>
                  Judges will deliberate from 1:00 PM to 2:00 PM. Winners will be announced during the 
                  Awards Ceremony on July 5, 2025, from 2:00 PM to 3:00 PM.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Judges */}
        <Section 
          title="Meet Our Judges" 
          subtitle="Our judges are experts from various fields including technology, business, design, and academia. They bring diverse perspectives and expertise to evaluate your projects."
          className="judges-section"
          id="judges"
        >
          <div className="judges-note">
            <p>
              <strong>Note:</strong> Judges for the Create & Conquer 2025 Hackathon will be announced closer to the event. 
              Check back later for updates, or follow us on social media for announcements.
            </p>
          </div>
        </Section>

        {/* Prizes */}
        <Section 
          title="Prizes" 
          subtitle="Create & Conquer 2025 offers a total prize pool of ₱9,500 across various categories."
          className="prizes-section bg-accent"
          id="prizes"
        >
          <div className="prizes-container">
            <h3 className="prizes-category-title">Main Prizes</h3>
            <div className="prizes-grid grid grid-3" ref={prizesRef}>
              <Card
                cardType="prize"
                className="first-prize"
                delay={0.1}
              >
                <div className="prize-medal">1st</div>
                <h4>Champion</h4>
                <div className="prize-amount">₱4,500</div>
                <ul className="prize-perks">
                  <li>Cash prize</li>
                  <li>Winner's trophy</li>
                  <li>Certificates</li>
                  <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                </ul>
              </Card>
              
              <Card
                cardType="prize"
                className="second-prize"
                delay={0.2}
              >
                <div className="prize-medal">2nd</div>
                <h4>1st Place</h4>
                <div className="prize-amount">₱3,000</div>
                <ul className="prize-perks">
                  <li>Cash prize</li>
                  <li>Trophy</li>
                  <li>Certificates</li>
                  <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                </ul>
              </Card>
              
              <Card
                cardType="prize"
                className="third-prize"
                delay={0.3}
              >
                <div className="prize-medal">3rd</div>
                <h4>2nd Place</h4>
                <div className="prize-amount">₱2,000</div>
                <ul className="prize-perks">
                  <li>Cash prize</li>
                  <li>Trophy</li>
                  <li>Certificates</li>
                  <li>Recognition on CPEO and FEU Tech Innovation Center platforms</li>
                </ul>
              </Card>
            </div>

            <h3 className="prizes-category-title">Special Awards</h3>
            <div className="special-prizes-grid grid grid-3">
              <Card
                title="Sponsor Award 1"
                cardType="prize"
                className="special-prize"
                delay={0.1}
              >
                <div className="prize-amount">TBA</div>
                <p>Special prize sponsored by our partners (to be announced).</p>
              </Card>
              
              <Card
                title="Sponsor Award 2"
                cardType="prize"
                className="special-prize"
                delay={0.2}
              >
                <div className="prize-amount">TBA</div>
                <p>Special prize sponsored by our partners (to be announced).</p>
              </Card>
              
              <Card
                title="Best Presenter"
                cardType="prize"
                className="special-prize"
                delay={0.3}
              >
                <div className="prize-amount">Certificate</div>
                <p>Awarded to the team with the most impressive presentation skills.</p>
              </Card>
              
              <Card
                title="Best Working Prototype"
                cardType="prize"
                className="special-prize"
                delay={0.4}
              >
                <div className="prize-amount">Certificate</div>
                <p>Awarded to the most functional and well-executed project implementation.</p>
              </Card>
              
              <Card
                title="Fan Favourite Award"
                cardType="prize"
                className="special-prize"
                delay={0.5}
              >
                <div className="prize-amount">Certificate</div>
                <p>Awarded to the team whose project receives the most audience votes.</p>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          className="cta-section bg-primary"
          withContainer={true}
        >
          <div className="cta-content">
            <h2>Ready to Win?</h2>
            <p>Register now for Create & Conquer 2025 and compete for exciting prizes!</p>
            <div className="cta-buttons">
              <Link to="/registration" className="btn btn-white">Register Now</Link>
              <Link to="/rules" className="btn btn-secondary">Read the Rules</Link>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Judging; 