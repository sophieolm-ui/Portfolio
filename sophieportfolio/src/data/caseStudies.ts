export interface CaseStudyFact {
  label: string
  text: string
}

export interface CaseStudySection {
  heading?: string
  paragraphs?: string[]
  facts?: CaseStudyFact[]
  insights?: {
    title?: string
    items: string[]
  }
  links?: { label: string; href: string }[]
}

export interface CaseStudy {
  tagline: string
  intro: string
  sections: CaseStudySection[]
}

export const caseStudies: Record<string, CaseStudy> = {
  glowtap: {
    tagline: '"See your water, save your water"',
    intro:
      'A portable faucet attachment that provides visual feedback to reduce water waste, inspired by UN SDG 6: Clean Water and Sanitation.',
    sections: [
      {
        heading: 'Concept',
        paragraphs: [
          'GlowTap clips onto bathroom faucets and glows green (safe to use), yellow (warning), and red (turn off now) with smiley face indicators to encourage timely shut-off during handwashing or face washing. Prototypes simulated time-based feedback (not actual flow) due to constraints.',
        ],
      },
      {
        heading: 'Initial Sketches',
        paragraphs: [
          'After brainstorming project ideas, we began by sketching initial ideas for GlowTap.',
        ],
      },
      {
        heading: 'Cardboard Prototype',
        facts: [
          { label: 'Prototype Fidelity', text: 'Low-Fidelity' },
          { label: 'Evaluation Method', text: 'User Observation, Q&A' },
          {
            label: 'Evaluation Goals',
            text: 'Understand physical form, size, and faucet attachment usability. By observing how users interact with a cardboard model, we can determine whether the shape and attaching mechanism are intuitive.',
          },
          {
            label: 'Desirability',
            text: 'The form of the GlowTap is comfortable for the user to hold and attach to the faucet. The form of the GlowTap is pleasant to view in a bathroom setting.',
          },
        ],
        paragraphs: [
          'We began by measuring the size of the faucet to determine the circumference of the inner ring of the product. Based on these measurements, we created two prototypes of the form: one circular, and one hexagonal.',
          'The cardboard prototypes fit snugly onto the faucet, allowing us to test user perception of the forms.',
        ],
        insights: {
          title: 'User Testing Session 1 — Key Insights',
          items: [
            'Circle is more aesthetically pleasing — the participant said "I like how it looks unified with the sink."',
            '"I would rate it 9.5 out of ten because there is no case to protect it from getting scratched."',
            'Shape suggestion: animal shaped — "a dolphin face pointing out from the sink."',
            '"Personally, I would like it compact and hidden, but if it was for a guest bathroom, it would want it to stand out so they can see it."',
          ],
        },
        links: [
          {
            label: 'User testing session footage',
            href: 'https://drive.google.com/file/d/15hk5kJDfVrRr-uB4XiPMgjRdqhbF_aLc/view?usp=drive_link',
          },
        ],
      },
      {
        paragraphs: [
          'Conclusion: Based on this user test we concluded that the circular form was the most effective and desirable. We decided to use the circular form in our prototypes going forward.',
        ],
      },
      {
        heading: 'Laser Cut Prototypes',
        facts: [
          { label: 'Prototype Fidelity', text: 'Mid-Fidelity' },
          { label: 'Evaluation Method', text: 'User Observation, Q&A' },
          {
            label: 'Evaluation Goals',
            text: 'Test the desirability of different light shapes. By observing how users react to our different light shapes, we can determine which shape is the most intuitive and aesthetically pleasing for them.',
          },
          {
            label: 'Usability',
            text: 'Users understand what to do with the water based on the shape and placement of the lights.',
          },
        ],
        paragraphs: [
          'In our second iteration, we created small laser-cut rectangles that indicated the front face of the GlowTap.',
          'This prototype enabled us to explore various hole shapes and patterns to determine which would most effectively communicate the LED lighting system to users. We gathered feedback on which shape was the most intuitive and desirable to inform our decision on which shape to use in the final product.',
          'We began by designing an SVG file, utilizing skills we had learned earlier in the course. Our first laser cut was very close to the edge of the laser cutter workpiece, so a couple of our pieces fell to the bottom of the machine. We cut them again and successfully achieved seven prototypes.',
        ],
        insights: {
          title: 'User Testing Session 2 — Key Insights',
          items: [
            'Participants understood the meaning of the lights without being told: "[green means] the current water usage is good" (participant 1).',
            'Participants described yellow as: warning, slow down, yield, almost stop.',
            'Participants described red as: stop the water, you’re using too much.',
            'Participants felt that the smiley face lights were most intuitive: the plus/minus signs might be confusing and encourage more water use; "the hand symbols are confusing" (participant 3); "for colorblindness, I like the smiley faces" (participant 2).',
            'One participant wanted green on the left side, one preferred red on the right, and the third participant did not have a preference.',
            'Participants said that they would enjoy seeing the smiley faces attached to their bathroom sink every day.',
          ],
        },
        links: [
          {
            label: 'User testing session footage',
            href: 'https://drive.google.com/file/d/1d-l5zs9ZSdiyy1uXKUdZoOK68W2ObmHC/view?usp=drive_link',
          },
        ],
      },
      {
        paragraphs: [
          'Conclusion: After user testing our designs with three people, we concluded that the smiley face shapes with a smile, a meh face, and a frowning face indicate clearly what the user should be doing with their water use. We concluded that these shapes would be clear to a user who is red-green colorblind and are also aesthetically pleasing and enjoyable to have in a bathroom setting. We decided to use the smiley face shapes in our prototypes going forward.',
        ],
      },
      {
        heading: '3D Printing Prototype',
        facts: [
          { label: 'Prototype Fidelity', text: 'Low and Mid-Fidelity' },
          { label: 'Evaluation Method', text: 'Usability Testing' },
          {
            label: 'Evaluation Goals',
            text: "Evaluate the prototype's feel, shape, weight, and structural integrity when attached to a faucet.",
          },
          {
            label: 'Feasibility',
            text: 'The diameter of the GlowTap fits a faucet. The GlowTap stays on the faucet for an extended period of time (30 minutes) without falling off (with and without water flowing).',
          },
        ],
        paragraphs: [
          'After our laser cut prototype, we began our 3D modeling process. We created three low-fidelity 3D printed prototypes to test the fit of the attachment on the chosen faucet.',
          'Our first three prototypes had a circumference of 3 inches, 3.05 inches, and 3.10 inches. We did not conduct a user testing session with our 3D printed prototypes; however, within our team, we tested the fit of each prototype on the chosen sink.',
        ],
        insights: {
          items: [
            '3 in fit, but easily slipped off.',
            'Neither 3.05 in nor 3.1 in stayed on the faucet.',
            'While the sizing was close, the prints easily slipped off due to their smooth interior surface.',
          ],
        },
      },
      {
        paragraphs: [
          'Conclusion: We realized that gripping features (ridges or grooves) would be necessary in the next iteration to ensure a secure fit. We decided to include texture on the interior of our next 3D model, and to continue to use the 3 inch circumference. For our next 3D print, we included space to insert LED lights, smiley-face-shaped holes for light to shine through, and two different types of texture on the inside.',
          'After some research into possible textures, we chose to model one prototype with a "diagonal" texture, and one prototype with a "dot" texture.',
        ],
        insights: {
          title: 'Key Insights',
          items: [
            'The "dot" texture stayed securely on the sink, even when water was flowing.',
            'The "diagonal" texture slipped easily off the sink.',
          ],
        },
        links: [
          {
            label: 'Texture fit testing footage',
            href: 'https://drive.google.com/file/d/1cFJCjSmPjq6gsZ4PqXN6oLiDI8HIClvb/view?usp=sharing',
          },
        ],
      },
      {
        paragraphs: [
          'Conclusion: The "dot" texture was more effective in adding grip to the interior of the prototype, so we chose this texture for our final 3D printed design. Our final 3D printed prototype included the "dot" texture and an inner chamber to contain the LED lights behind the smiley faces.',
        ],
      },
      {
        heading: 'Circuit and Wizard of Oz Prototype',
        facts: [
          { label: 'Prototype Fidelity', text: 'High-Fidelity' },
          { label: 'Evaluation Method', text: 'Behavior Tracking & Feedback Session' },
          {
            label: 'Evaluation Goals',
            text: 'Test user understanding and reaction to the light changes (green/yellow/red) without needing fully functional water pressure sensors. This method allows us to assess how well the visual signals communicate urgency and influence water usage behavior.',
          },
          {
            label: 'Desirability/Usability',
            text: 'Users understand when to turn the water off based on the light cues. The lights are appealing to users as a household object.',
          },
        ],
        paragraphs: [
          'We developed a fourth high-fidelity prototype to evaluate the feasibility of our design by creating a working circuit prototype of our lights system. This allowed us to gather genuine user reactions when conducting our behavioral Wizard of Oz test.',
          'We researched many different types of LED lights online and found that there were no remote-controlled LED lights small enough to fit within our 3D printed prototype, so we settled on small pico LED lights and wired them along the sink, hiding the wires so they would not be noticeable during the test.',
          'After sketching our circuit design, we began constructing it by twisting the wires together, but found the connections were not very reliable and the lights kept turning off. We decided to solder each wire connection to ensure a reliable circuit, using a long wire length so it could run along the edge of the sink.',
          'The next day, we set up the Wizard of Oz test and wired the circuit along the sink, using metallic tape to cover the wires along the faucet. The lights were controlled by one of our team members who hid in the cabinet beneath the sink during the test.',
        ],
        links: [
          {
            label: 'How the circuit was wired along the sink',
            href: 'https://drive.google.com/file/d/16AXO_HuD5A3yHiFj08hmJXl3-q2AkVoF/view?usp=sharing',
          },
          {
            label: 'How the Wizard of Oz test was controlled',
            href: 'https://drive.google.com/file/d/1MS3yloZzbKv9rU3xZG7znzfLl0rtRWRJ/view?usp=sharing',
          },
          {
            label: 'Behavioral Wizard of Oz testing video (reveal at 3:05)',
            href: 'https://www.youtube.com/watch?v=iXmDhTgOyG8',
          },
        ],
      },
      {
        heading: 'User Testing Session 3 — Evaluating Usability Through Wizard of Oz Prototyping',
        paragraphs: [
          'We conducted the Wizard of Oz test with one participant to evaluate desirability and usability of the prototype. After the testing session we asked: what do the lights represent; how easy was it to understand the feedback system (1–5); how did the lights influence water usage behavior; what features would make GlowTap more useful; and would they consider using it at home.',
        ],
        insights: {
          title: 'Key Insights',
          items: [
            'When the yellow light turned on, the participant said "it’s yellow, do I stop?" — indicating they understood the yellow light meant to use less water.',
            'The participant turned off the water when the light turned red, without prior explanation.',
            'The participant mentioned the light colors were helpful because "it’s something we grew up accustomed to."',
            'The participant mentioned the smiley faces were helpful to indicate user actions, saying "the smiley faces would be helpful for those who don’t fully understand the lights."',
          ],
        },
      },
      {
        paragraphs: [
          'Conclusion: Based on this Wizard of Oz test, we concluded that users understand when to turn the water off based on the light cues. The combination of light colors and smiley faces was helpful to indicate user action, and users want to have this product as a household item.',
        ],
      },
      {
        heading: 'GlowTap Demo Video',
        paragraphs: [
          'We filmed and edited a demonstration video that describes our entire design process and showcases the decisions we made based on each prototype.',
        ],
        links: [
          {
            label: 'Demo video — overview of our entire process',
            href: 'https://www.youtube.com/watch?v=vj9YOSzsvs4',
          },
        ],
      },
      {
        heading: 'Analysis',
        paragraphs: [
          'We showed the demo video of our user testing sessions during a showcase with over 30 students, two design professors, and visiting design professionals — including one two-hour testing session where viewers recorded their thoughts on the effectiveness of the project.',
        ],
        insights: {
          title: 'What worked well',
          items: [
            'Viewers noted significant improvement and progression of ideas across our iterations.',
            'One viewer highlighted that we approached the problem space with a non-obtrusive solution, and that the product appears intuitive to use.',
            'Viewers admired how the laser cut prototype was tested using transparent colored paper and a flashlight.',
            'One viewer mentioned that GlowTap would be "very practical for people to implement into their lives."',
            'One person mentioned that the GlowTap branding increased its desirability.',
          ],
        },
      },
      {
        insights: {
          title: 'What needed improvement',
          items: [
            'Viewers wondered how the product would determine when to switch from green to yellow to red, and how it could sense water flow.',
            'Viewers suggested the product could be expanded to work on other water features such as showers.',
            'One viewer mentioned that the "red sad face" might be hard to view from a distance.',
            'One viewer suggested exploring more options for color accessibility.',
            'One person noted that the red "turn off" light is a form of negative reinforcement, and suggested exploring ways to add positive reinforcement.',
          ],
        },
      },
      {
        insights: {
          title: 'If we had more time, for future iterations we would…',
          items: [
            'Continue to iterate the lighting mechanism and consider how it could be made more accessible for blind and low-vision individuals.',
            'Determine how GlowTap would sense the amount of water flow and account for changes in flow, exploring available flow-rate sensors.',
            'Expand the scope of the product to address shower and kitchen sink use.',
            'Integrate a smart home aspect and add a visual way to observe water use over time.',
          ],
        },
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'We found that our four prototypes of the GlowTap were successful in communicating the use of the product and successfully gathered insight into how users would interact with it.',
          'Our desirability statement was met because users felt that the GlowTap was comfortable to hold and appealing to view in a bathroom setting. Our usability statement was met because users understood the meaning of the colored lights and when to turn off the water based on the light cues, without explanation. Our feasibility statement was met because the GlowTap fit snugly on the bathroom sink we tested on and stayed on the faucet for over 30 minutes during testing sessions — the maximum time we tested.',
          'Overall, the final GlowTap prototype met our goals of prototyping for usability, desirability, and feasibility, and we received positive feedback during the showcase — so we will not be completing another iteration of the GlowTap for this project.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'Through this project, we expanded our prototyping skills and built upon skills learned throughout the class. We learned new laser cutting skills by modeling unique shapes such as a smiley face, and new 3D modeling skills in OnShape — making small adjustments to add texture to a product, learned through YouTube tutorials on the Wrap, Transform, and Offset Plane tools. We also learned a new prototyping method for circuits, which utilized soldering.',
        ],
      },
    ],
  },
}
