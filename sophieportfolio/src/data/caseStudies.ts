export interface CaseStudyFact {
  label: string
  text: string
}

export interface CaseStudyCard {
  title: string
  subtitle?: string
  facts: CaseStudyFact[]
}

export interface CaseStudyTable {
  columns: string[]
  rows: { label: string; values: string[] }[]
}

export interface CaseStudyPaletteGroup {
  label: string
  colors: { name: string; hex: string }[]
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
  table?: CaseStudyTable
  cards?: CaseStudyCard[]
  palette?: CaseStudyPaletteGroup[]
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

  'city-hungarian-culture-festival': {
    tagline: 'A visual identity and app for a three-day Hungarian culture festival',
    intro:
      'During a 10-week course project, I was challenged to create a cohesive visual identity for a festival hosted on the University of Washington campus — developing an engaging, recognizable app while thoughtfully considering the audience, theme, and experience of the festival itself.',
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          'During our 10-week course project, I was challenged to create a cohesive visual identity for a festival hosted on the University of Washington campus. The goal was to not only develop an engaging and recognizable app, but also to thoughtfully consider the audience, theme, and experience of the festival itself.',
        ],
      },
      {
        heading: 'CVP and USP',
        paragraphs: [
          'My idea for a festival is a Hungarian Culture Festival on the University of Washington campus. For anyone of any age who wants exposure to the unique culture of Hungary, the idea provides three days of performances, experiences, and products from Hungarian artists, dancers, chefs, bakers, and athletes.',
          'Unlike the 5th Hungary Festival in Odaiba, this idea provides activities and entertainment into later hours of the day in order to attract an older audience as well, through late night performances and food.',
        ],
      },
      {
        heading: 'Festival Research',
        paragraphs: [
          'I researched three existing Hungarian festivals worldwide and compared them: The 5th Hungary Festival at Odaiba, because it is in Japan, which is very culturally different from Hungary; the Hungarian Heritage Festival in McLean, VA, because it is run by a Hungarian foundation; and the Hungarian Festival in Sarasota, because it is based in the US and run by a non-Hungarian group. I was interested to see how these three festivals compare.',
        ],
      },
      {
        heading: '5th Hungary Festival at Odaiba',
        facts: [
          {
            label: 'Core Value Proposition',
            text: 'A 1-day festival in Tokyo about Hungarian heritage, free for anyone in the area. The target audience is people who want to learn more about Hungarian culture or participate in it, achieved through the event and booths about Hungarian heritage.',
          },
          {
            label: 'Unique Selling Point',
            text: 'Unlike other Hungarian culture festivals, this one has a workshop on completing a Rubik’s cube, making hair accessories, and playing Teqball — run by knowledgeable volunteers with supplies on hand — plus Hungarian-based companies accompanying the food and music.',
          },
        ],
        links: [
          {
            label: 'Festival info',
            href: 'https://culture-hu.translate.goog/jp/tokio/events/Hungari-festival-2024?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true',
          },
        ],
      },
      {
        heading: 'Hungarian Heritage Festival in McLean, VA',
        facts: [
          {
            label: 'Core Value Proposition',
            text: 'A 1-day festival about Hungarian heritage run by the Kossuth Foundation, free for anyone in the area. The target audience is people who want to learn more about Hungarian culture or participate in it, achieved through the festival’s performances.',
          },
          {
            label: 'Unique Selling Point',
            text: 'Unlike other Hungarian culture festivals, this one has hands-on workshops like noodle making and gingerbread decorating, run by knowledgeable volunteers with supplies on hand. It also has an afterparty, so it runs later than others.',
          },
        ],
        links: [
          { label: 'Festival info', href: 'https://kossuthfoundation.org/events/iii-hungarian-heritage-festival/' },
        ],
      },
      {
        heading: 'Hungarian Festival in Sarasota',
        facts: [
          {
            label: 'Core Value Proposition',
            text: 'A 2-day festival in Sarasota, Florida celebrating Hungarian cultural heritage, run by the Global Friendship Foundation and free for anyone in the area. The target audience is people who want to learn more about Hungarian culture or participate in it, achieved through the festival’s performances.',
          },
          {
            label: 'Unique Selling Point',
            text: 'Unlike other Hungarian culture festivals, this one has sports, dance, archery, and a kids corner, run by knowledgeable volunteers with supplies on hand.',
          },
        ],
        links: [{ label: 'Festival info', href: 'https://sarasotamagyarfesztival.com/' }],
      },
      {
        heading: 'Competitive Analysis',
        paragraphs: [
          'Through my research, I found that all Hungarian Culture festivals have a lineup of traditional performances mixed with modern singers. Some festivals have booths with Hungarian companies and workshops. Some teach about traditional sports while others have kids corners. Some festivals even have an after-party for older age groups. For my festival, I wanted to find the perfect intersection between the festivals I researched.',
        ],
        table: {
          columns: ['5th Hungary Festival at Odaiba', 'Hungarian Heritage Festival in McLean VA', 'Hungarian Festival in Sarasota'],
          rows: [
            { label: 'Best feature', values: ['Teqball', 'Afterparty', 'Archery'] },
            {
              label: 'Best for',
              values: [
                'People interested in a mix of Hungarian and Japanese culture.',
                'Older age groups',
                'Families',
              ],
            },
            {
              label: 'Customer',
              values: [
                'People who want to learn more about Hungarian culture or people who want to participate in it',
                'People who want to learn more about Hungarian culture or people who want to participate in it',
                'People who want to learn more about Hungarian culture or people who want to participate in it',
              ],
            },
            { label: 'Attendance', values: ['Approximately 3,500', 'Unsure', 'Approximately 4,000'] },
            { label: 'Pricing', values: ['Free', 'Free', 'Free'] },
            {
              label: 'Insight',
              values: [
                'They have a mix of Hungarian culture and Japanese culture',
                'They are interested in showing people traditions from Hungary',
                'They have a big emphasis on the music aspect of the festival',
              ],
            },
          ],
        },
      },
      {
        heading: 'Personas',
        paragraphs: [
          'Through my research, I found that all Hungarian Culture festivals have a lineup of traditional performances mixed with modern singers, booths with Hungarian companies and workshops, traditional sports or kids corners, and sometimes an after-party for older age groups. For my festival, I wanted to find the perfect intersection between the festivals I researched — so I built three personas around it.',
        ],
        cards: [
          {
            title: 'Anika',
            subtitle: 'Age 9 — "The Child"',
            facts: [
              {
                label: 'Why her',
                text: 'She has Hungarian roots and is younger than most people I think of as going to culture festivals.',
              },
              {
                label: 'Backstory',
                text: 'A 9-year-old girl who lives in California with her parents. Her mom is Hungarian and shared her Hungarian culture with her. Anika likes playing with friends, Roblox, baking, arts and crafts, and listening to music.',
              },
              {
                label: 'Resources',
                text: 'Doesn’t have many resources of her own to connect with her Hungarian roots. She goes to Hungarian school, where both she and her mom hear about events they should go to together.',
              },
              {
                label: 'Emotions',
                text: 'Feels split about Hungarian events — sometimes bored or like there’s nothing for kids, but she has lots of fun when other kids are there to interact with.',
              },
              {
                label: 'Goals',
                text: 'Wants a Hungarian event nearby (a short car ride), with fun things to do and other kids to play with, while staying connected to her Hungarian culture — ideally through cultural workshops.',
              },
              {
                label: 'Scenario',
                text: 'Hears about a festival from her mom while visiting her sister at UW. It’s an easy walk from the apartment. She plays with other kids at the Hungarian sports workshop, then enjoys her favorite foods.',
              },
              { label: 'Favorite brands', text: 'Target, LEGO, Squishmallows' },
            ],
          },
          {
            title: 'Julia',
            subtitle: 'Age 50 — "The Mother"',
            facts: [
              {
                label: 'Why her',
                text: 'She moved from Hungary to live in the US and is very involved in her culture.',
              },
              {
                label: 'Backstory',
                text: 'A mom of 2 kids who lives in California. She moved from Hungary over 20 years ago and shares her culture with her kids. She likes to work out, cook, travel, and read.',
              },
              {
                label: 'Resources',
                text: 'Finds it important to stay in touch with her culture. Has a group of Hungarians nearby she goes to events with, often bringing her kids so they can learn through events and travel to Hungary.',
              },
              {
                label: 'Emotions',
                text: 'Has attended several Hungarian events and enjoys a wide range of them — the performances, the social aspect, the language, and the food, as well as things her kids enjoy.',
              },
              {
                label: 'Goals',
                text: 'Wants to know about Hungarian events near her and bring her family and friends — a fun lineup for the adults, workshops for the kids, and nothing more than about $20 to attend.',
              },
              {
                label: 'Scenario',
                text: 'Hears about a festival while visiting her eldest daughter at UW, and it has something for everyone. Afterward she feels happy — like the family reconnected with their Hungarian roots while having fun.',
              },
              { label: 'Favorite brands', text: 'Sur La Table, Athleta, Madewell' },
            ],
          },
          {
            title: 'Abby',
            subtitle: 'Age 20 — "The Reader"',
            facts: [
              {
                label: 'Why her',
                text: 'A University of Washington student who isn’t Hungarian and wants to learn about other cultures.',
              },
              {
                label: 'Backstory',
                text: 'A junior at UW studying HCDE. Loves reading, photography, and hiking, and is part of a literature club and an engineering club. Raised in California by Indian heritage parents, immersed in their culture.',
              },
              {
                label: 'Resources',
                text: 'Connects with her Indian heritage through nearby cultural events — UW clubs with cultural events and dances, and events her parents tell her about back home.',
              },
              {
                label: 'Emotions',
                text: 'Has enjoyed religious cultural celebrations in the past and is now excited to attend other cultures’ events — discovering new food, music, and things to do.',
              },
              {
                label: 'Goals',
                text: 'Wants to attend a culture festival with a friend for free (or pay for items there), reachable by public transit, with a real lineup and hands-on activities.',
              },
              {
                label: 'Scenario',
                text: 'Hears about a Hungarian festival at UW, talks her friends into going since it’s nearby and free, and enjoys performances and new foods while learning about the culture.',
              },
              { label: 'Favorite brands', text: 'Barnes & Noble, Brandy Melville, The North Face' },
            ],
          },
        ],
      },
      {
        heading: 'Customer Journey',
        paragraphs: [
          'I chose to do my customer journey on Julia because I believe she is the most likely to seek out a Hungarian culture festival and bring people with her.',
          'I noticed that having an affordable/free festival is important, as well as a clear website for it, clear signage at the festival, and an app with upcoming events clearly displayed for the user.',
        ],
        cards: [
          {
            title: 'Awareness',
            facts: [
              { label: 'Actions', text: 'Julia decides she wants to go to a Hungarian culture festival and starts looking for one nearby.' },
              { label: 'Touch points', text: 'She searches online and asks friends if they’ve heard about any Hungarian culture festivals.' },
              { label: 'Goals', text: 'She wants to find a friendly Hungarian culture festival that is nearby.' },
              { label: 'Emotions', text: 'She feels excited to find something that works with her goals.' },
              { label: 'Pain points', text: 'She is frustrated because there isn’t a good place to find events like this.' },
              { label: 'Opportunity', text: 'A web app that you could use to search for festivals.' },
            ],
          },
          {
            title: 'Consideration',
            facts: [
              { label: 'Actions', text: 'Julia finds a Hungarian culture festival nearby and is considering if she should go.' },
              { label: 'Touch points', text: 'She reads about what is included in the festival.' },
              { label: 'Goals', text: 'She wants to be able to bring her friends and family with her to the festival.' },
              { label: 'Emotions', text: 'She is unsure because she doesn’t know if her friends and family would enjoy coming, or if it’s affordable.' },
              { label: 'Pain points', text: 'The festival has a lineup of artists during the day but isn’t very kid-friendly.' },
              {
                label: 'Opportunity',
                text: 'A festival that runs day and evening to serve both families and adults, with workshops tailored to kids.',
              },
            ],
          },
          {
            title: 'Purchase',
            facts: [
              { label: 'Actions', text: 'Julia decides she wants to go to this Hungarian culture festival, so she claims tickets.' },
              { label: 'Touch points', text: 'She tries to purchase a ticket through the festival’s website.' },
              {
                label: 'Goals',
                text: 'She wants to know she is correctly, easily, and safely purchasing tickets, and wants it to be affordable.',
              },
              {
                label: 'Emotions',
                text: 'She is apprehensive because she wants to make sure the site is safe and that she isn’t spending a lot of money.',
              },
              { label: 'Pain points', text: 'Tickets cost around $20, so she can’t afford to take her family and friends.' },
              { label: 'Opportunity', text: 'A free-admission festival, so she doesn’t worry about cost or purchasing tickets incorrectly.' },
            ],
          },
          {
            title: 'Post-purchase',
            facts: [
              {
                label: 'Actions',
                text: 'Julia attends with her family and friends — participating in workshops, watching performances, and trying traditional food.',
              },
              {
                label: 'Touch points',
                text: 'She interacts with event staff, signs up for activities, uses the website or app for the schedule, and posts on social media.',
              },
              { label: 'Goals', text: 'She wants a fun, memorable experience, to feel welcomed, and to learn about Hungarian culture.' },
              {
                label: 'Emotions',
                text: 'She feels happy, entertained, and connected to her culture (or a new one) — though disappointed if things don’t go well.',
              },
              {
                label: 'Pain points',
                text: 'Unclear signage or crowded spaces; workshops that are full or scheduled at inconvenient times.',
              },
              {
                label: 'Opportunity',
                text: 'Clear schedules, helpful staff, an easy-to-use event app or map, and captured feedback/social content during the event.',
              },
            ],
          },
          {
            title: 'Retention',
            facts: [
              { label: 'Actions', text: 'Julia follows the festival’s social media pages and signs up for the newsletter to hear about future events.' },
              { label: 'Touch points', text: 'She receives email updates, social media posts, and surveys about the festival experience.' },
              { label: 'Goals', text: 'She wants to stay connected to similar events and experiences in the future.' },
              { label: 'Emotions', text: 'She feels nostalgic about the good experience and is eager to attend again or share it with others.' },
              { label: 'Pain points', text: 'She may lose interest if she doesn’t hear about future events or if there’s no follow-up engagement.' },
              {
                label: 'Opportunity',
                text: 'Follow-up emails, early invites or discounts for future events, and a community page for attendees to connect.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Wordmark',
        paragraphs: [
          'I wanted to convey a feeling of travel, adventure, and fun. To accomplish this, I chose a paper airplane mark alongside a script wordmark — the plane’s curly, looping path echoes the wordmark’s curly font, especially in the descender of the "y."',
        ],
      },
      {
        heading: 'Mood Board',
        paragraphs: [
          'I chose a variety of images that represent Hungarian culture — embroidery, traditional outfits, the coat of arms, and folk art — and wanted to carry most of these colors through into the festival itself.',
        ],
      },
      {
        heading: 'Colors',
        paragraphs: [
          'I wanted to convey a feeling of the Hungarian flag (red, white, and green), summer time, and vibrance. To accomplish this, I chose a tetradic color palette featuring red, green, light blue, and purple — bright, playful colors reflecting summer and vibrance, with green and red doubling as the colors of the flag.',
          'For accessibility, the red reaches a 7:1 contrast ratio and the green reaches 5.99:1.',
        ],
        palette: [
          {
            label: 'Primary',
            colors: [
              { name: 'Red', hex: 'A6151A' },
              { name: 'Green', hex: '146A4F' },
              { name: 'Yellow', hex: 'FCCC5D' },
            ],
          },
          {
            label: 'Secondary',
            colors: [
              { name: 'Blue', hex: '416098' },
              { name: 'Light red', hex: 'D28A8D' },
              { name: 'Tan', hex: 'FFF4DB' },
            ],
          },
          {
            label: 'Tertiary',
            colors: [
              { name: 'White', hex: 'FFFFFF' },
              { name: 'Black', hex: '000000' },
              { name: 'Light green', hex: '8AB4A7' },
            ],
          },
        ],
      },
      {
        heading: 'Typography',
        paragraphs: [
          'I chose the font Cormorant to pair with the wordmark face, Taprom — Cormorant has a small x-height like Taprom and shares a similarly curled character in its descenders.',
        ],
        facts: [
          { label: 'Wordmark font', text: 'Taprom' },
          { label: 'Pairing font', text: 'Cormorant' },
        ],
      },
      {
        heading: 'Festival Poster',
        paragraphs: [
          'I chose to use my wordmark font, Taprom, for headlines and dates, and Cormorant for the rest.',
          'I used size and spacing to convey importance — size mattered most. I also used angles to add movement, and boldness to help convey hierarchy.',
        ],
      },
      {
        heading: 'Festival Signage',
        paragraphs: [
          'For my signage, I chose primary directional signage because good directions are crucial for a festival spread out across campus. I designed a directions banner for 15th Ave NE that follows the color theme and incorporates the paper plane from the wordmark.',
        ],
      },
      {
        heading: 'Festival Map',
        paragraphs: [
          'I designed a map using the festival’s color scheme and venues, using circles to label its important aspects. Color draws attention to key points, and everything is labeled as clearly as possible to help colorblind visitors navigate.',
        ],
      },
      {
        heading: 'UI Style Tile',
        paragraphs: [
          'I used one primary and one secondary color so the primary colors would pop, avoiding red and green together due to color blindness and the stop-and-go signals they convey. For secondary buttons, I kept the same color borders for focused and active states for consistency. For text, I used yellow for errors so it would differ significantly from the other colors.',
        ],
      },
      {
        heading: 'User Flow',
        paragraphs: [
          'My user flow follows my persona Julia, who is purchasing merch for her family before the festival. I chose a merch-purchasing flow to get more practice prototyping in Figma — the flow allows the user to constantly change their mind about purchasing along the way.',
        ],
      },
      {
        heading: 'Wireframes and User Testing',
        paragraphs: [
          'I made several interfaces showing shopping for merch and adding it to a cart at the City Festival, including a page where you can see the merch up close — a critique I received in class.',
        ],
      },
      {
        heading: 'Mobile Interface',
        paragraphs: [
          'I chose to design an app focused on purchasing merchandise. There’s an animation linking the wordmark with the arrow mark, before taking the user to a home page where they scroll through the events and businesses at the festival. From there, they tap the basket in the nav bar to browse merch, select a piece with a color and size, and add it to the cart — then check out with a payment method and land on a confirmation page before returning home. I chose this flow to push my creative range, playing with smart animation, horizontal scrolling, and on-click interactions.',
          'My initial design showed more merch per row, which drew feedback that it was hard to see everything and felt overwhelming — so I reduced each row to 2 items. I was also told there was a disconnect between the wordmark and the arrow at the top of each screen, so I designed an animation connecting the two.',
          'For the overall design, I prioritized simplicity by breaking content into several screens, kept the primary colors true to the Hungarian flag, and carried the arrow mark and cream background across every screen for consistency.',
        ],
      },
      {
        heading: 'Final Prototype',
        paragraphs: ['The full flow was prototyped and tested in Figma.'],
      },
      {
        heading: 'Sources',
        links: [
          {
            label: 'Franz Liszt — Public Domain Review',
            href: 'https://publicdomainreview.org/essay/what-makes-franz-liszt-still-important/',
          },
          { label: 'Eszterlánc — HHF thank-you post', href: 'https://eszterlanc.com/thank-you-for-the-support-during-the-hhf/' },
          { label: 'BJC — Oláh Kálmán Jr. Quartet', href: 'https://www.bjc.hu/gallery/olah-kalman-jr-quartet/' },
          {
            label: 'Rockbook — CAFB Szakácsi Greg Gábor zenekar',
            href: 'https://www.rockbook.hu/sites/default/files/c.a.f.b._szakacsi_greg_gabor_cafb_zenekar.jpg',
          },
          {
            label: 'The Guardian — Ernő Rubik interview',
            href: 'https://www.theguardian.com/books/2020/sep/13/erno-rubik-the-cube-gives-me-hope-people-can-solve-their-problems-and-survive',
          },
          { label: 'Seattle Christmas Market — chimney cakes', href: 'https://seattlechristmasmarket.com/vendor/chimney-cakes/' },
          { label: 'Chimney Cakes Seattle (Instagram)', href: 'https://www.instagram.com/chimneycakesseattle/' },
          { label: 'Seattle Cserkész (Facebook)', href: 'https://www.facebook.com/SeattleCserkesz/' },
          { label: 'Wikipedia — Pörkölt', href: 'https://en.wikipedia.org/wiki/P%C3%B6rk%C3%B6lt' },
          { label: 'Google Search — Budapest bistro reference', href: 'https://www.google.com/search?q=budapest+bistro' },
        ],
      },
    ],
  },

  'trail-flow': {
    tagline: 'A bridge between hydration and strategic planning for Burke-Gilman Trail users',
    intro:
      'TrailFlow is a mobile app that helps runners on the Burke-Gilman Trail locate water fountains, plan routes around them, and stay current on maintenance — designed over a 10-week HCDE course sequence at the University of Washington.',
    sections: [
      {
        facts: [
          { label: 'My role', text: 'UX Designer' },
          { label: 'Duration', text: '10 weeks' },
          { label: 'Tools', text: 'The Mill' },
        ],
      },
      {
        heading: 'About',
        paragraphs: [
          'Context: TrailFlow is a project developed as part of the upper-level undergraduate courses HCDE 302 and 303 in Human Centered Design & Engineering at the University of Washington during the 2024–2025 academic year. Over six months, our team focused on enhancing accessibility to water fountains along the Burke-Gilman Trail, aiming to improve the experience for those engaging in the trail’s activities.',
        ],
        facts: [
          {
            label: 'Problem statement',
            text: '"How can we improve access to hydration for runners on the Burke-Gilman Trail while making it affordable and convenient?"',
          },
          {
            label: 'Vision statement',
            text: 'Our project envisions a future where access to hydration is seamless and convenient for all trail users. By designing an intuitive app, we aim to help users easily locate water fountains, plan routes, and stay informed about maintenance updates, ensuring a more enjoyable and well-hydrated experience on the trail.',
          },
        ],
      },
      {
        heading: 'Research',
        paragraphs: [
          'Our research phase involved a competitive analysis of existing hydration solutions and interviews with four college students who run on the Burke-Gilman Trail. Through this process, we identified three key findings that shaped our ideation and design decisions, allowing us to focus on the most impactful user needs.',
        ],
        insights: {
          title: 'Findings',
          items: [
            'Portability — did not like to carry anything on them for multiple reasons.',
            'Hydration — consuming different forms of hydration to stay hydrated.',
            'Safety — did not feel safe for various reasons during their run.',
          ],
        },
      },
      {
        heading: 'User Personas',
        paragraphs: [
          'To gain a deeper understanding of our target users, we created detailed user personas based on our research insights. These personas — Jill and Jonny — helped us synthesize our findings and provided a reference point throughout the design process. Jonny, in particular, served as the foundation for our user journey map, ensuring our decisions were grounded in real user experiences.',
        ],
        cards: [
          {
            title: 'Jill Jones',
            subtitle: 'UW student, Computer Science',
            facts: [
              {
                label: 'Backstory',
                text: 'Works in app development at REV. Runs daily for her mental and physical health, a habit from high school cross country and track. She tries to stay hydrated but sometimes forgets to drink enough water throughout the day, and struggles with dry mouth on long runs after taking energy gels. Prefers running at Greenlake but finds its water fountains crowded or inconvenient at peak times.',
              },
              { label: 'Resources', text: 'Uses Google Maps to look at a map.' },
              {
                label: 'Goals',
                text: 'Training for the Boston Marathon after qualifying at the Eugene Marathon last year. Stays hydrated throughout her day. Looks for routes to complete workouts on, including hills to train for the hilly Seattle Half Marathon.',
              },
              {
                label: 'Pain points',
                text: 'Schedules runs at Greenlake because of the number of fountains there — the only fountains on the Burke-Gilman are near the Brooks store, Gasworks Park, outside Trailside, and outside U-Village. Not a fan of the hikers on the Burke, and has had issues with cars crossing it.',
              },
            ],
          },
          {
            title: 'Jonny Jones',
            subtitle: 'UW student, Bioengineering',
            facts: [
              {
                label: 'Backstory',
                text: 'Works at GAP in U-Village. A marathon trainee seeking competition after high school basketball and baseball, drinking about half a gallon of water daily but often forgetting. Runs marathons most weekends and shorter runs between weekday classes, often feeling dehydrated on long runs because he forgets to hydrate the night before. Completes long runs with friends for motivation.',
              },
              { label: 'Resources', text: 'Uses Strava to track runs.' },
              {
                label: 'Goals',
                text: 'Training for a sub-3-hour Seattle Marathon. Wants to stay healthy and hydrated, and include many hills in his routes to train for the hilly course.',
              },
              {
                label: 'Pain points',
                text: 'Gets dehydrated on weekend long runs after forgetting to drink water the night before. Struggles to find functional water fountains on the Burke-Gilman (three never work) and is forced to stop at stores. Often gets bored on long runs on the Burke.',
              },
            ],
          },
        ],
      },
      {
        heading: 'User Journey Maps',
        paragraphs: [
          'Our user journey map for Jonny Jones outlined the marathon training experience, highlighting key actions, thoughts, and emotions across five phases — Awareness, Consideration, Activity, After, and Post Thoughts. This visualization helped us identify major pain points and opportunities to enhance the user experience, ensuring our design addressed the real challenges runners face. It became a structured framework we referred back to throughout the design process, keeping our solutions aligned with user needs and expectations.',
        ],
      },
      {
        heading: 'Design Requirements',
        paragraphs: [
          'Our design requirements established clear guidelines for our product’s features and functionalities, providing a roadmap to ensure TrailFlow met both user needs and product goals. These requirements, directly informed by our research and personas, helped us create wireframes and prototypes that remained user-centered.',
          'Following our design review, we recognized that implementing all design requirements would be challenging. As a result, we prioritized four key aspects — Locate, Usability, Updates, and Maintenance — focusing on the most essential elements to deliver a functional and impactful solution.',
        ],
        insights: {
          items: [
            'Locate — enable runners to locate the nearest hydration source.',
            'Usability — design the system to be intuitive and user-friendly.',
            'Updates — offer real-time updates on hydration source functionality.',
            'Maintenance — facilitate rapid reporting and resolution of issues.',
          ],
        },
      },
      {
        heading: 'Ideation — Storyboards',
        paragraphs: [
          'With our research and design framework in place, we transitioned into the ideation phase to envision what TrailFlow could look like. Our storyboards illustrated potential user interactions, focusing on specific use cases of runners on the Burke-Gilman Trail. We created three distinct storyboards to explore different user journeys and demonstrate how our product effectively addresses hydration challenges.',
        ],
        facts: [
          {
            label: 'Storyboard 1 — App',
            text: 'An app would allow users to find the nearest water fountain to their location, and plan their run to see where the fountains are located.',
          },
          {
            label: 'Storyboard 2 — Signage',
            text: 'Signage would be posted at the beginning, end, and throughout the trail, showing where water fountains are located — so runners don’t have to rely on a mobile device during their runs.',
          },
          {
            label: 'Storyboard 3 — Winterized fountains with a pedal',
            text: 'Fountains would be winterized to work year-round, with a pedal so individuals who can’t use the button can still access water.',
          },
        ],
      },
      {
        paragraphs: ['After a design review with industry experts, we agreed that the mobile app was the most promising idea.'],
      },
      {
        heading: 'Information Architecture',
        paragraphs: [
          'With our final design solution — TrailFlow, a hydration app — decided, we created an information architecture to define the overall structure of our product. This framework helped us map out navigation and user flows, integrating both digital and physical aspects of the experience.',
          'Building on our research findings and storyboards, we translated user needs into a structured blueprint for the app’s interface: Open App → Map of Water Fountains (home page), branching into Location (nearest fountain by distance, or select a fountain), Draw Route (search), and Settings (Help/Contact us, Maintenance). This information architecture served as a critical reference point during the wireframing stage, ensuring our designs aligned with user expectations.',
        ],
      },
      {
        heading: 'Wireframes / User Flows',
        paragraphs: [
          'To bring our information architecture to life, we began experimenting with digital wireframing to develop user flows. Our team created multiple iterations of the product, refining screen layouts and interactions to enhance usability.',
          'These interaction sketches laid the foundation for our wireframes and user flows, which included key features such as route mapping, settings, and location toggles. This phase was essential in establishing a concrete structure for our prototype, allowing us to iterate through low-, medium-, and high-fidelity designs.',
        ],
      },
      {
        heading: 'Design — Low Fidelity',
        paragraphs: [
          'For our low-fidelity prototype, we created a digital prototype based on our established information architecture and user flows. This early version focused on core interactions to test usability and gather initial feedback.',
        ],
      },
      {
        heading: 'Usability Testing — Round 1',
        paragraphs: [
          'We then conducted usability testing with four participants who had never seen our product before. Our goal was to collect real user feedback to identify potential improvements. This testing provided valuable insights that informed key changes for our mid-fidelity prototype:',
        ],
        insights: {
          items: [
            '"When I turn on my location, I want to know how far the water fountain is from me."',
            '"I want a photo of the water fountain when I click on it, or some information about it."',
            '"Planning the route is very helpful since you cannot really plan on Google Maps, although I cannot zoom in, so it is a little hard to see the surrounding areas."',
            '"A compass would be nice since it is a map."',
          ],
        },
      },
      {
        heading: 'Design — Mid Fidelity',
        paragraphs: [
          'Following the low-fidelity usability tests, our team refined the prototype for the mid-fidelity stage. This version introduced limited functionality and color while maintaining interactive elements. Iterating at this stage allowed us to further develop our design ideas before conducting another round of usability testing.',
        ],
        insights: {
          title: 'Changes from low-fi to mid-fi',
          items: [
            'Showing the distance in miles to the water fountain when the user turns on their location.',
            'Showing information about the water fountain when the user clicks on it.',
            'Adding a compass.',
            'Making the maintenance page more interactive and easier to use when in a rush.',
          ],
        },
      },
      {
        heading: 'Usability Testing — Round 2',
        paragraphs: [
          'Based on user insights from our first usability test, we implemented several key changes to enhance the user experience, then shared the mid-fidelity prototype with four new participants for fresh perspectives. Their feedback was constructive and positive, offering additional areas for improvement.',
        ],
        insights: {
          items: [
            '"Finding the water fountain closest to my location was intuitive."',
            '"Planning was a little confusing because it already had a route for me."',
            '"I am unable to zoom in to plan the route or locate the nearest water fountain."',
          ],
        },
      },
      {
        paragraphs: [
          'These insights played a crucial role in shaping our high-fidelity prototype and, ultimately, the final version of our product. This final iteration was prepared for presentation to our class and industry professionals, ensuring our design was both user-centered and refined.',
        ],
      },
      {
        heading: 'Design — High Fidelity',
        paragraphs: [
          'After conducting usability testing on our mid-fidelity prototype, our team refined the design for the high-fidelity stage. This phase focused on enhancing interactions, improving aesthetics, and making the interface more visually appealing and polished.',
        ],
        insights: {
          title: 'Changes from mid-fi to high-fi',
          items: [
            'Added a zoom in/out feature.',
            'Let users plan their route by clicking two locations on it.',
            'Added more color.',
            'More consistent icons and buttons.',
          ],
        },
      },
      {
        heading: 'Design Review',
        paragraphs: [
          'For our final design presentation, we showcased our completed prototype to peers and industry professionals. This presentation was an opportunity to demonstrate our design process, highlight key insights, and gather valuable feedback to further refine our work.',
        ],
        insights: {
          title: 'Feedback from design review',
          items: [
            'Good on maintenance — users might also want to submit a photo of the fountain.',
            'Users might want to connect the app to a watch.',
            'It is a simple prototype.',
          ],
        },
      },
      {
        heading: 'Reflecting Back',
        paragraphs: [
          'Over the course of this 20-week project, we gained valuable insights into collaboration, design rationale, and interactive design. This experience reinforced the importance of thoughtful decision-making and user-centered design.',
          'Our team worked exceptionally well together, thanks to our commitment to clear communication and effective time management. By ensuring assignments were completed on time and with attention to detail, we created a strong foundation for success — skills we aim to carry forward into future projects.',
          'One of the biggest challenges we faced was articulating the depth behind our design decisions. While we could explain our choices at a high level, diving deeper into the reasoning behind them required more effort. This process helped us refine our ability to communicate design rationale more effectively.',
        ],
      },
      {
        heading: 'Looking Forward',
        paragraphs: [
          'Looking ahead, we see opportunities to make TrailFlow even more accessible by incorporating features such as voice commands, dark mode, and additional interactions. These improvements would enhance usability and ensure a more inclusive experience for all users.',
          'Overall, this project was a success, and we are proud of the work we accomplished.',
        ],
      },
    ],
  },

  sensigo: {
    tagline: 'Voice-first repair documentation for automotive technicians',
    intro:
      'A mobile app that helps automotive technicians view repair plans and efficiently document their work using voice notes — reducing manual data entry and improving the accuracy of service documentation for warranty and compliance.',
    sections: [
      {
        facts: [
          { label: 'Role', text: 'UX Designer' },
          { label: 'Platform', text: 'Mobile (iOS)' },
          { label: 'Focus', text: 'Workflow optimization, voice interaction, field usability' },
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'Technicians often work in physically demanding, time-sensitive environments where typing detailed repair notes is impractical. Existing systems required excessive manual input, leading to incomplete documentation, errors, and frustration — especially when notes were needed for warranty submissions or follow-up diagnostics.',
        ],
      },
      {
        heading: 'Solution',
        paragraphs: ['The app enables technicians to:'],
        insights: {
          items: [
            'View structured repair plans and customer complaints in one place.',
            'Record voice notes during or after repairs.',
            'Automatically convert voice recordings into organized, editable text summaries.',
            'Review, refine, and submit notes with confidence.',
          ],
        },
      },
      {
        insights: {
          title: 'Key design decisions',
          items: [
            'Voice-first interaction to support hands-free use in the workshop.',
            'Clear information hierarchy for repair steps, actions performed, and parts used.',
            'Progressive disclosure to keep screens readable while allowing detailed review.',
            'Confirmation and completion states to prevent accidental submissions.',
          ],
        },
      },
      {
        heading: 'Outcome & Impact',
        paragraphs: [
          'The final design streamlines the documentation workflow, helping technicians complete notes faster while maintaining high-quality records. By integrating voice input with structured summaries, the app bridges the gap between real-world repair work and accurate digital reporting — improving efficiency, reducing errors, and supporting smoother warranty submissions.',
        ],
      },
      {
        heading: 'Key Skills Demonstrated',
        insights: {
          items: [
            'Mobile UX & interaction design',
            'Voice UX and multimodal input',
            'Workflow analysis for field workers',
            'Information architecture & content hierarchy',
            'Designing for constrained, real-world environments',
          ],
        },
      },
    ],
  },

  arus: {
    tagline: 'A solar-powered cold chain for Indonesia’s small-scale fishers',
    intro:
      'ARUS is a solar-powered cold-chain ecosystem designed during the Global Challenge Lab 2026, a two-week virtual innovation program through Imperial Enterprise Lab, in response to the prompt: "How might we build a more climate-resilient and sustainable future for all?"',
    sections: [
      {
        facts: [
          { label: 'Program', text: 'Global Challenge Lab 2026 — Imperial Enterprise Lab' },
          { label: 'Duration', text: '2 weeks' },
          { label: 'Team', text: 'Green Frontier' },
        ],
      },
      {
        heading: 'Team — Green Frontier',
        paragraphs: [
          'Our team, Green Frontier, consisted of myself, Andrew Bernhardt Nugroho, Peter Kastner, Omkar Shirke, and Catherine Huang. We each brought diverse backgrounds in energy systems, renewables, chemical engineering, and behavioral design, and worked across several time zones to create a design that was both meaningful and impactful.',
        ],
      },
      {
        heading: 'The Problem',
        paragraphs: [
          'Andrew, who is Indonesian, brought to our attention the challenges facing fisheries in Indonesia. Indonesia’s fisheries sector is the cornerstone of both local livelihoods and the national economy, yet it continues to face a fundamental infrastructure gap: access to reliable cold chain infrastructure for preserving fish and maintaining quality. This causes Indonesia’s small-scale fishers to lose up to a third of every catch before it reaches the market.',
        ],
      },
      {
        heading: 'The Solution — ARUS',
        paragraphs: [
          'Our solution is ARUS, a solar-powered cold-chain ecosystem that combines ice production and storage for small-scale fishers in Eastern Indonesia. We propose deploying solar-powered cold storage sites equipped with integrated sensors to ensure the fish stays fresh throughout storage and transport, providing the fisher with a freshness certificate. We expect that within four years, fishers will earn up to 25% more by reducing post-harvest spoilage.',
        ],
      },
      {
        heading: 'My Contribution',
        paragraphs: [
          'My role focused on ensuring this solution would realistically help and benefit local fishers. After researching Indonesian fishing communities, I asked my group questions like: "How do we make sure fishers know how to use ARUS, and how do we design for fishers who don’t have smartphones?" This helped steer our solution toward being intuitive and effective.',
        ],
      },
      {
        heading: 'Next Steps',
        paragraphs: [
          'If we continue to work on this project, my next step would be to conduct interviews with the Indonesian fishing communities to validate our assumptions and better understand their needs.',
        ],
      },
    ],
  },
}
