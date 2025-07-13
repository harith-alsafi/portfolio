import type React from "react"
export interface WindowState {
  id: string
  title: string
  component: React.ComponentType
  isOpen: boolean
  isMinimized: boolean
  isFocused: boolean
  route: string
}

export interface DesktopIcon {
  id: string
  label: string
  icon: React.ComponentType
  route: string
  position: { x: number; y: number }
}

export const profile = {
    "email": "harith.alsafi@gmail.com",
    "linkedin_url": "https://www.linkedin.com/in/harith-al-safi/",
    "github_url": "https://github.com/harith-alsafi",
    "public_identifier": "harith-al-safi",
    "profile_pic_url": "https://assets.enrichlayer.com/pp/profilepic/d1f8682ec48fa667a9e66105d538e73d",
    "background_cover_image_url": null,
    "first_name": "Harith",
    "last_name": "Al-Safi",
    "full_name": "Harith Al-Safi",
    "follower_count": 1055,
    "occupation": "Regional Lead",
    "headline": "Full Stack Engineer | Machine Learning Engineer",
    "summary": "I consider myself as hard working and a passionate person when it comes to my career. As I have always had an interest in the computer world with respect to the hardware side and the software side. Some of my hobbies are bodybuilding, soccer and programming. I am a big enthusiast of linux and the open source community as I mostly use it for all of my engineering requirements. Am also a big fan of python as I mostly use it for general scripting and mathematical programming.",
    "country": "GB",
    "country_full_name": "United Kingdom",
    "city": "Manchester",
    "state": "England",
    "experiences": [
        {
            "starts_at": {
                "day": 1,
                "month": 11,
                "year": 2024
            },
            "ends_at": null,
            "company": "BT Group",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/bt",
            "company_facebook_profile_url": null,
            "title": "Regional Lead",
            "description": "Responsible for managing the graduates and emerging talents at BT Group.",
            "location": "Manchester, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Event Organisation",
                "Team Work",
                "Leadership"
            ],
            "summary": "Managing events for graduates and emerging talents at BT Group."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2024
            },
            "ends_at": null,
            "company": "BT Group",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/bt",
            "company_facebook_profile_url": null,
            "title": "Software Engineer",
            "description": "- Architected high-performance REST APIs using Java Spring Boot with MongoDB achieving 99.9 % uptime\n- Implemented deployment architecture using Pulumi, Kafka and AWS improving response time by 60 %\n- Established mentorship program for apprenticeship students, resulting in 90 % pass rate for training assessments",
            "location": "Manchester, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Java",
                "Spring Boot",
                "REST APIs",
                "Agile",
                "Jira",
                "React Js"
            ],
            "summary": "Developing backend REST APIs using Java and Spring Boot in an agile team."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2023
            },
            "ends_at": {
                "day": 1,
                "month": 6,
                "year": 2024
            },
            "company": "University of Leeds",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/university-of-leeds",
            "company_facebook_profile_url": null,
            "title": "Course Representative",
            "description": "- Course represntative of the Electronics and Computer Engineering\n- Assisted students to deliver useful feedback to module leaders \n- Managed student questions about course material and so on \n- Created a community welcoming all level 3 Electronics and Computer Engineering students",
            "location": "Leeds, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Communication",
                "Team Work",
                "Leadership",
                "Problem Solving"
            ],
            "summary": "Representing the Electronics and Computer Engineering course at the University of Leeds."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 12,
                "year": 2023
            },
            "ends_at": {
                "day": 1,
                "month": 3,
                "year": 2024
            },
            "company": "University of Leeds",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/university-of-leeds",
            "company_facebook_profile_url": null,
            "title": "Robotics Engineer",
            "description": "- Designed a 3D CAD for robot ﬁght league using Solidworks and Blender and Jira for project management\n- Implemented a control system using Arduino and C++ for the robot’s movement, sensors and pnuematic system\n- Built the robot with 3D printing, metal cutting and soldering for the electronics\n- Tested object detection and tracking using OpenCV and Python for the robot’s vision system\n- Managed a team of 5 engineers to develop the robot and compete in the league ending up 1st place",
            "location": "Leeds, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Solidworks",
                "Blender",
                "Arduino",
                "C++",
                "3D Printing",
                "Metal Cutting",
                "Soldering",
                "OpenCV",
                "Python"
            ],
            "summary": "Developing a robot for the Robot Fight League using CAD, Arduino, and Python."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 8,
                "year": 2023
            },
            "ends_at": {
                "day": 1,
                "month": 11,
                "year": 2023
            },
            "company": "Velz Travel",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/velz",
            "company_facebook_profile_url": null,
            "title": "Frontend Developer",
            "description": "- Directed the frontend of a travel web app for a startup built with Next.js, React.js and Typescript\n- Developed user interface using Material UI following Figma design guidelines and business logic using Nodejs\n- Collaborated with developers using Jira whilst working on Java Springboot backend with PostgreSQL and Docker\n- Conducted valuable tests of AI implementation using NLP and LLM's of the itinerary suggestion feature\n- Delivered app through CI/CD, agile development, automated testing with 93\\% coverage and web deployment",
            "location": "London, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Next.js",
                "React.js",
                "Typescript",
                "Material UI",
                "Node.js",
                "Java Spring Boot",
                "PostgreSQL",
                "Docker",
                "CI/CD",
                "Agile Development"
            ],
            "summary": "Developing a travel web app frontend using Next.js, React.js, and Typescript."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 7,
                "year": 2022
            },
            "ends_at": {
                "day": 1,
                "month": 7,
                "year": 2023
            },
            "company": "Johnson Controls",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/johnson-controls",
            "company_facebook_profile_url": null,
            "title": "Software Engineer",
            "description": "-Administered legacy C/C++ projects such as a project named SEE, fixing bugs and adding new features, demonstrating proficiency in C/C++ programming.\n- Proposed and reengineered the legacy software SEE into a new graphical interface named JPS using C# .NET WPF, showcasing innovative thinking and project management skills.\n- Developed a C# .NET library for serial data analysis generation in embedded system programs, showcasing expertise in C# development\n- Invented a new scripting language called ALGO derived from C# to accelerate the development process of fire detection algorithms, demonstrating creativity and problem-solving skills.\n- Designed an analytics web dashboard using React JS whilst leveraging predictive AI for security and safety applications.\n- Led a team of 10 interns to end up placing in the top 3 in the Future Leaders competition, highlighting leadership and teamwork abilities.\n- Participated in company-wide competitions, reaching the semifinals in the Tech challenge program, highlighting strong presentation and strategic thinking abilities.",
            "location": "London, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "C/C++",
                "C# .NET",
                "WPF",
                "React JS",
                "AI",
                "Leadership",
                "Team Work"
            ],
            "summary": "Developing software solutions using C/C++, C# .NET, and React JS."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 12,
                "year": 2021
            },
            "ends_at": {
                "day": 1,
                "month": 3,
                "year": 2022
            },
            "company": "Paperound",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/paperound",
            "company_facebook_profile_url": null,
            "title": "Freelance Machine Learning Engineer",
            "description": "- Applied data visualization using Python Matplotlib to present analytical insights to non-technical stakeholders\n- Created natural language proccessing applications using LLM's and Python for sentiment analysis\n- Built and trained a reinforcement neural network using TensorFlow, KerasRL for predicting stock prices\n- Engineered a high performance C++ linear algebra library for data science through Jenkins, Docker and Cmake\n- Developed low level ARM embedded systems with C whilst using memory allocation and register programming\n- Engineered a high performance C++ linear algebra library for data science through Jenkins, Docker and Cmake\n- Created a desktop application using C++ and QT for video analysis and processing",
            "location": "United Kingdom",
            "logo_url": null,
            "stack": [
                "Python",
                "Matplotlib",
                "NLP",
                "LLM's",
                "TensorFlow",
                "KerasRL",
                "C++",
                "Jenkins",
                "Docker",
                "Cmake"
            ],
            "summary": "Freelancing as a Machine Learning Engineer, specializing in Python and C++."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 3,
                "year": 2021
            },
            "ends_at": {
                "day": 1,
                "month": 11,
                "year": 2021
            },
            "company": "ICMarkets FX",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/icmarkets-fx",
            "company_facebook_profile_url": null,
            "title": "Day Trader",
            "description": "- Researched financial factors such as interest rates, GDP, inflation, and employment to predict market trends\n- Conducted quantitative research on statistical methods and their applications in financial markets.\n- Designed a trading strategy using technical, fundamental analysis whilst simulating risk assesment with Python\n- Traded indices, commodities and forex pairs using leverage and margin with a risk management strategy \n- Engineered a trading algorithm using Python and Quantitave Analysis for automated trading and backtesting",
            "location": "Leeds, England, United Kingdom",
            "logo_url": null,
            "stack": [
                "Financial Analysis",
                "Quantitative Research",
                "Python",
                "Trading Algorithms",
                "Risk Management"
            ],
            "summary": "Trading financial markets, specializing in indices, commodities, and forex pairs."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 6,
                "year": 2020
            },
            "ends_at": {
                "day": 1,
                "month": 3,
                "year": 2021
            },
            "company": "Mesopotamia Group",
            "company_linkedin_profile_url": "https://www.linkedin.com/company/alsafiholdingco",
            "company_facebook_profile_url": null,
            "title": "Information Technology Administrator",
            "description": "- Collaborated with a team to build a local file server on Ubuntu built using Apache and Nextcloud\n- Administered the server using Bash, Python and Nmap with SSH tunneling and port forwarding\n- Engineered a load balancer using MPI and C to distribute traffic between servers increasing availability by 34\\%\n- Analyzed the network data logs using Python to predict and prevent cyber attacks\n- Implemented Linux networking and protocols using IP addressing and routing for cloud hosting",
            "location": "Amman, Jordan",
            "logo_url": null,
            "stack": [
                "Linux",
                "Bash",
                "Python",
                "Nmap",
                "SSH Tunneling",
                "MPI",
                "C",
                "Network Analysis"
            ],
            "summary": "Managing IT infrastructure and server administration using Linux and Python."
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2017
            },
            "ends_at": {
                "day": 1,
                "month": 11,
                "year": 2017
            },
            "company": "CHSMUN",
            "company_linkedin_profile_url": null,
            "company_facebook_profile_url": null,
            "title": "Event Coordinator",
            "description": "- Organised modern united nation meetings\n- Formalised professional conclusion reports after each meeting with statistical proof on each claim.\n- Initiated researched debates about global issues.\n- Achieved the best delegate status in the form of well researched debates and reports",
            "location": "Amman, Jordan",
            "logo_url": null,
            "stack": [
                "Event Organisation",
                "Research",
                "Debate",
                "Report Writing"
            ],
            "summary": "Coordinating events and debates on global issues, achieving best delegate status."
        }
    ],
    "education": [
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2020
            },
            "ends_at": {
                "day": 31,
                "month": 7,
                "year": 2024
            },
            "field_of_study": "Electronics and Computer Engineering",
            "degree_name": "BEng with Honours",
            "school": "University of Leeds",
            "school_linkedin_profile_url": "https://www.linkedin.com/school/university-of-leeds",
            "school_facebook_profile_url": null,
            "description": "- Embedded systems, Microprocessors, FPGA, Circuit Analysis, Signal processing, Networking, Compiler design - Cloud and Parallel computing, Secure and Distributed systems, Cybersecurity, Software Engineering, Research",
            "logo_url": null,
            "grade": "First Class - 4.0/4.0",
            "activities_and_societies": null
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2019
            },
            "ends_at": {
                "day": 31,
                "month": 1,
                "year": 2020
            },
            "field_of_study": "Engineering",
            "degree_name": "Foundation degree",
            "school": "University of Leeds",
            "school_linkedin_profile_url": "https://www.linkedin.com/school/university-of-leeds",
            "school_facebook_profile_url": null,
            "description": "We took higher level pure and applied mathematics in addition to CAD designs with automobiles. I also took external courses on python, octave and multivariable calculus.",
            "logo_url": null,
            "grade": "93/100",
            "activities_and_societies": null
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2017
            },
            "ends_at": {
                "day": 31,
                "month": 1,
                "year": 2019
            },
            "field_of_study": "Engineering Science",
            "degree_name": "High School Diploma",
            "school": "International Baccalaureate",
            "school_linkedin_profile_url": "https://www.linkedin.com/school/ibo",
            "school_facebook_profile_url": null,
            "description": "Subjects Taken:\nMath Standard Level\nEnglish B Standard Level\nArabic B Standard Level\nPhysics Higher Level\nChemistry Higher Level\nEconomics Standard Level",
            "logo_url": null,
            "grade": "40/42",
            "activities_and_societies": "Activities and Societies: CAS activities in addition to extra math courses"
        }
    ],
    "languages": [
        "English",
        "Spanish",
        "Arabic"
    ],
    "languages_and_proficiencies": [
        {
            "name": "English",
            "proficiency": "FULL_PROFESSIONAL"
        },
        {
            "name": "Spanish",
            "proficiency": "ELEMENTARY"
        },
        {
            "name": "Arabic",
            "proficiency": "FULL_PROFESSIONAL"
        }
    ],
    "accomplishment_organisations": [],
    "accomplishment_publications": [
        {
            "name": "Vega: LLM-Driven Intelligent Chatbot Platform for Internet of Things Control and Development",
            "publisher": "MPDI - Sensors",
            "published_on": {
                "day": 18,
                "month": 6,
                "year": 2025
            },
            "description": "Large language models (LLMs) have revolutionized natural language processing (NLP), yet their potential in Internet of Things (IoT) and embedded systems (ESys) applications remains largely unexplored. Traditional IoT interfaces often require specialized knowledge, creating barriers for non-technical users. We present Vega, a modular system that leverages LLMs to enable intuitive, natural language control and interrogation of IoT devices, specifically, a Raspberry Pi (RPi) connected to various sensors, actuators, and devices. Our solution comprises three key components: a physical circuit with input and output devices used to showcase the LLM’s ability to interact with hardware, an RPi integrating a control server, and a web application integrating LLM logic. Users interact with the system through natural language, which the LLM interprets to remotely call appropriate commands for the RPi. The RPi executes these instructions on the physically connected circuit, with outcomes communicated back to the user via LLM-generated responses. The system’s performance is empirically evaluated using a range of task complexities and user scenarios, demonstrating its ability to handle complex and conditional logic without additional coding on the RPi, reducing the need for extensive programming on IoT devices. We showcase the system’s real-world applicability through physical circuit implementation while providing insights into its limitations and potential scalability. Our findings reveal that LLM-driven IoT control can effectively bridge the gap between complex device functionality and user-friendly interaction, and also opens new avenues for creative and intelligent IoT applications. This research offers insights into the design and implementation of LLM-integrated IoT interfaces.",
            "url": "https://www.mdpi.com/1424-8220/25/12/3809"
        }
    ],
    "accomplishment_honors_awards": [
        {
            "title": "Futur leaders: Top 3 finalists",
            "issuer": "Johnson Controls",
            "issued_on": {
                "day": 1,
                "month": 5,
                "year": 2023
            },
            "description": "Participated in an insider internship program Future Leaders. We compete amongst 18 teams each with around 10 members, we ended up picking an idea in which we integrate GPT into one of JCI’s existing products. I fully lead the team to end up placing in the top 3. We managed to design an architectural solution amongst showcasing a Figma design prototype and showcasing a business case discussing the return on investments costs sales margin and even a development timeline. The final judges were vice presidents of the company which meant I had to present in an innovative way."
        },
        {
            "title": "Royal Hackaway v6 best use of Matlab",
            "issuer": "Royal Hackaway",
            "issued_on": {
                "day": 1,
                "month": 2,
                "year": 2023
            },
            "description": "Won the best use of Matlab award in hackathon event. Project submitted: https://devpost.com/software/1eat"
        },
        {
            "title": "Royal Hackaway v6 best use of auth0",
            "issuer": "Royal Hackaway",
            "issued_on": {
                "day": 1,
                "month": 2,
                "year": 2023
            },
            "description": "Won the best use of auth0 in a hackathon. Project submitted: https://devpost.com/software/1eat"
        },
        {
            "title": "LISC Runner up",
            "issuer": "Leeds",
            "issued_on": {
                "day": 1,
                "month": 5,
                "year": 2020
            },
            "description": "Honourable mention for the hard work , attitude and expelling results"
        },
        {
            "title": "CHS-MUN - Best delegate award",
            "issuer": "Cambridge High School",
            "issued_on": {
                "day": 1,
                "month": 10,
                "year": 2018
            },
            "description": "MUN is known as Modern United Nations in which we discuss global politics and some ongoing issues. I received the best delegate in an honour of detailed debates and factual information."
        }
    ],
    "accomplishment_patents": [],
    "accomplishment_courses": [],
    "accomplishment_projects": [
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2021
            },
            "ends_at": null,
            "title": "Cross platform math library in c++",
            "description": "A cross platform c++ math library with a lot of features for engineers and mathematicians Features: - Linear Algebra (Matrix PLU factorisation, Matrix transpose.. etc) - Statistical analysis (mean, average, mode .. etc) - Differential Calculus (numerical nth order derivative.. etc) - Integral Calculus (numerical bound integrals .. etc) - Signal analysis (square wave generation, filtering.. etc) - Equation solvers (linear and polynomial equations) - Vector arithmetic (cross and dot products)",
            "url": "https://github.com/harith-alsafi/mcpp",
            "type": "library",
            "stack": [
                "C++",
                "Cross Platform",
                "Linear Algebra",
                "Statistical Analysis",
                "Calculus",
                "Signal Processing"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 5,
                "year": 2023
            },
            "ends_at": {
                "day": 31,
                "month": 5,
                "year": 2023
            },
            "title": "Bullet Time",
            "description": "Bullet Time - Pygame Project Inspiration Our inspiration for Bullet Time came from the classic Mario game, but with a unique twist where the player takes on the role of a bullet. The goal is to dodge obstacles and collect coins to win. Accomplishments We're Proud Of We're proud of creating a unique and engaging game that captures the nostalgia of classic games while offering a fresh and exciting gameplay experience. We also custom-designed all the sprites and learned Pygame in a short amount of time, which was an incredible accomplishment. What We Learned Through the development of Bullet Time, we learned a lot about Pygame and game development in general. We learned how to set up collisions, menus, sprites, animations, player stats, and maintain proper file names and conventions. What's Next for Bullet Time In the future, we plan to add more levels, enemies, and power-ups to make the game even more challenging and engaging for players. Additionally, we aim to incorporate audio to enhance the gaming experience. How to Run the Game To play the game, make sure you have Pygame installed and then simply run the main.py file in a Python IDE of your choice. The game will launch and you can start playing! About Game made with pygame",
            "url": null,
            "type": "game",
            "stack": [
                "Pygame",
                "Game Development",
                "Sprite Design",
                "Collision Detection"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 2,
                "year": 2023
            },
            "ends_at": {
                "day": 28,
                "month": 2,
                "year": 2023
            },
            "title": "Royal Hackaway v6 Web App",
            "description": "Submitted a dashboard web app made with Python, Flask, Matlab, Dash, Plotly, Auth0, Twilio and basic web tools.",
            "url": "https://devpost.com/software/1eat",
            "type": "web",
            "stack": [
                "Python",
                "Flask",
                "Matlab",
                "Dash",
                "Plotly",
                "Auth0",
                "Twilio"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 10,
                "year": 2022
            },
            "title": "Mario Club Website",
            "description": "A simple mario club webite link made with HTML and CSS Repo: https://github.com/harith-alsafi/mario-website Website: https://harith-alsafi.github.io/mario-website/",
            "url": "https://harith-alsafi.github.io/mario-website/",
            "type": "webs",
            "stack": [
                "HTML",
                "CSS",
                "Web Development"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 10,
                "year": 2022
            },
            "title": "Mini Blog with React",
            "description": "A mini blog web application made with react and a json-server database. Repo: https://github.com/harith-alsafi/mini-blog Website: https://harith-alsafi.github.io/mini-blog/",
            "url": "https://harith-alsafi.github.io/mini-blog/",
            "type": "web",
            "stack": [
                "React",
                "JSON Server",
                "Web Development"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 2,
                "year": 2022
            },
            "ends_at": {
                "day": 30,
                "month": 6,
                "year": 2022
            },
            "title": "FPGA Timer",
            "description": null,
            "url": null,
            "type": "embedded",
            "stack": [
                "FPGA",
                "VHDL",
                "Embedded Systems"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2021
            },
            "ends_at": {
                "day": 30,
                "month": 6,
                "year": 2022
            },
            "title": "8 bit CPU with a custom compiler",
            "description": "[soon to be released]",
            "url": null,
            "type": "embedded",
            "stack": [
                "Embedded Systems",
                "Custom Compiler",
                "C++"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 3,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 5,
                "year": 2022
            },
            "title": "Digital signal processing with matlab",
            "description": "Simulating a signal communication system [will be released soon]",
            "url": null,
            "type": "embedded",
            "stack": [
                "Matlab",
                "Signal Processing",
                "Embedded Systems"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 5,
                "year": 2022
            },
            "title": "Data analysis and Machine Learning in C++",
            "description": "This is a statistical modelling library with a menu system CLI interface. Features: - Statistical analysis (Average, STD, variance.. etc) - Linear and Polynomial regression of a dataset with plotting - Linear and Polynomial interpolation of a dataset with plotting Note: This will be soon combined with MCPP (the math library project)",
            "url": "https://github.com/harith-alsafi/statistic-model-cpp",
            "type": "ai",
            "stack": [
                "C++",
                "Machine Learning",
                "Data Analysis",
                "Statistical Modelling"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 5,
                "year": 2022
            },
            "title": "Embedded system STM32 Home Automation",
            "description": "The project is designed using C++ on a physical STM32 board with physical circuitry and it uses the MBED OS for arm microprocessors. This project revolves around automating and simulating a home automation system such that we are able to automate home systems Features - Control temperature using AC system - Control lights using menu system - Control devices and appliances using menu system - Security and alarm system",
            "url": "https://github.com/harith-alsafi/mbed-STM32L476",
            "type": "embedded",
            "stack": [
                "C++",
                "STM32",
                "MBED OS",
                "Embedded Systems",
                "Home Automation"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 5,
                "year": 2022
            },
            "title": "Media Player GUI",
            "description": "- A group project revolves around a Video browsing GUI written in Qt C++. Its able to manipulate collection of videos and add attributes to them. Some of the Features: - Open and save collections - open multiple videos and view them - Add/remove tags - Change/add location to video - Add/remove videos from collections - View the location of each video in the map - The map automatically changes as you change the video - Play/Pause/Stop the video - Seek through the video - Next and previous buttons to go though the videos - Change the volume - Have an overlay over the video that displays the current tag and location - Displays an option such that you can chose which tag to remove - Dynamic search - Through video names - Through tags - Through location - Through location and tags - Sorting - Sort by name ascend or descending - Sort by length ascend or descending - Sort by location ascend or descending",
            "url": "https://github.com/harith-alsafi/mediaplayer",
            "type": "desktop",
            "stack": [
                "C++",
                "Qt",
                "GUI Development",
                "Video Processing"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2022
            },
            "ends_at": {
                "day": 31,
                "month": 3,
                "year": 2022
            },
            "title": "Client and Multithreaded Server in Java",
            "description": "[Soon to be released]",
            "url": null,
            "type": "server",
            "stack": [
                "Java",
                "Multithreading",
                "Server Development"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 4,
                "year": 2021
            },
            "ends_at": {
                "day": 30,
                "month": 4,
                "year": 2021
            },
            "title": "Personal portfolio",
            "description": "My personal portfolio containing information about me , my projects, education , accomplishments and work experience. [still under development]",
            "url": "https://github.com/harith-alsafi/harith-alsafi.github.io",
            "type": "web",
            "stack": [
                "HTML",
                "CSS",
                "JavaScript",
                "Web Development"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 2,
                "year": 2021
            },
            "ends_at": {
                "day": 30,
                "month": 4,
                "year": 2021
            },
            "title": "Library management system in C",
            "description": "A library system written in C [going to be released soon]",
            "url": "https://github.com/harith-alsafi/library-management",
            "type": "desktop",
            "stack": [
                "C",
                "Desktop Application",
                "Library Management"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 3,
                "year": 2021
            },
            "ends_at": {
                "day": 31,
                "month": 3,
                "year": 2021
            },
            "title": "Game of life in C",
            "description": "Cell automation in C using SDL [going to be released soon]",
            "url": "https://github.com/harith-alsafi/game-of-life",
            "type": "game",
            "stack": [
                "C",
                "SDL",
                "Game Development",
                "Cell Automation"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 2,
                "year": 2021
            },
            "ends_at": {
                "day": 31,
                "month": 3,
                "year": 2021
            },
            "title": "Covid data visualisation in Java",
            "description": "Visualising covid daily cases in java using JavaFx and data is read from a csv file.",
            "url": null,
            "type": "ai",
            "stack": [
                "Java",
                "JavaFx",
                "Data Visualisation",
                "CSV Processing"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 2,
                "year": 2021
            },
            "ends_at": {
                "day": 28,
                "month": 2,
                "year": 2021
            },
            "title": "Simple embedded game and timer",
            "description": "Game and timer using mbed API and C++ [going to be released soon]",
            "url": "https://github.com/harith-alsafi/mbed-project",
            "type": "embedded",
            "stack": [
                "C++",
                "Embedded Systems",
                "Game Development",
                "Timer"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2020
            },
            "ends_at": {
                "day": 31,
                "month": 12,
                "year": 2020
            },
            "title": "Matlab network simulation",
            "description": "Doing a simple network simulation in matlab such is implementing check sum, parity bits and other error detection methods.",
            "url": null,
            "type": "embedded",
            "stack": [
                "Matlab",
                "Network Simulation",
                "Error Detection"
            ]
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2019
            },
            "ends_at": {
                "day": 31,
                "month": 12,
                "year": 2019
            },
            "title": "Car project Autodesk AutoCAD",
            "description": "Designing a race car with full suspension system, cockpit, body and engine",
            "url": null,
            "type": "cad",
            "stack": [
                "AutoCAD",
                "CAD Design",
                "Automotive Engineering"
            ]
        }
    ],
    "accomplishment_test_scores": [
        {
            "name": "Electronics and Computer BEng Year-2",
            "score": "79.4/100",
            "date_on": {
                "day": 1,
                "month": 6,
                "year": 2022
            },
            "description": "2nd year results of Electronic and Computer Engineering"
        },
        {
            "name": "Electronics and Computer BEng Year-1",
            "score": "87.6/100",
            "date_on": {
                "day": 1,
                "month": 6,
                "year": 2021
            },
            "description": "First year result of Electronic and Computer Engineering"
        },
        {
            "name": "Final year grade",
            "score": "93/100",
            "date_on": {
                "day": 1,
                "month": 5,
                "year": 2020
            },
            "description": "This is the final grade of the foundation year."
        },
        {
            "name": "Final IB diploma grade",
            "score": "40/42",
            "date_on": {
                "day": 1,
                "month": 7,
                "year": 2019
            },
            "description": "This is the IB (International Baccalaureate) course mark. Compared to my other teammates i was considered the 4th on the whole group of my school."
        },
        {
            "name": "",
            "score": "",
            "date_on": {
                "day": 1,
                "month": 6,
                "year": 2022
            },
            "description": "2nd year results of Electronic and Computer Engineering"
        },
        {
            "name": "",
            "score": "",
            "date_on": {
                "day": 1,
                "month": 6,
                "year": 2021
            },
            "description": "First year result of Electronic and Computer Engineering"
        },
        {
            "name": "",
            "score": "",
            "date_on": {
                "day": 1,
                "month": 5,
                "year": 2020
            },
            "description": "This is the final grade of the foundation year."
        },
        {
            "name": "",
            "score": "",
            "date_on": {
                "day": 1,
                "month": 7,
                "year": 2019
            },
            "description": "This is the IB (International Baccalaureate) course mark. Compared to my other teammates i was considered the 4th on the whole group of my school."
        }
    ],
    "volunteer_work": [
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2017
            },
            "ends_at": {
                "day": 30,
                "month": 6,
                "year": 2019
            },
            "title": "CAS Volunteering Student",
            "cause": "Social Services",
            "company": "International Baccalaureate",
            "company_linkedin_profile_url": null,
            "description": "Charity work such as helping those in need, in addition to volunteering for events mainly in the school and outside the school",
            "logo_url": null
        },
        {
            "starts_at": {
                "day": 1,
                "month": 6,
                "year": 2023
            },
            "ends_at": {
                "day": 30,
                "month": 6,
                "year": 2023
            },
            "title": "Event Coordinator",
            "cause": "Science and Technology",
            "company": "IEEE RAS ICRA",
            "company_linkedin_profile_url": null,
            "description": "- ICRA 2023 in ExceL London - Started on 28th of May till 2nd of June - Assisted in organising the event making sure everyone knows the correct workshops",
            "logo_url": null
        }
    ],
    "certifications": [
        {
            "starts_at": {
                "day": 1,
                "month": 8,
                "year": 2021
            },
            "ends_at": null,
            "name": "Data Science Methodology",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/records/7H73BEA9BSGQ"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 10,
                "year": 2021
            },
            "ends_at": null,
            "name": "Data Analysis with Python",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/verify/SFEJ9UUL56HE"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 9,
                "year": 2021
            },
            "ends_at": null,
            "name": "Databases and SQL for Data Science with Python",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/verify/AKQGRHVDGKDU"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 8,
                "year": 2021
            },
            "ends_at": null,
            "name": "Python for Data Science, AI & Development",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/verify/MMZMABVQBMHS"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 7,
                "year": 2021
            },
            "ends_at": null,
            "name": "Tools for data science",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/records/Z6RM6Q36KF32"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 6,
                "year": 2021
            },
            "ends_at": null,
            "name": "What is data science?",
            "license_number": null,
            "display_source": "IBM",
            "authority": "IBM",
            "url": "https://www.coursera.org/account/accomplishments/records/DRYJSZ2RU5EF"
        },
        {
            "starts_at": {
                "day": 1,
                "month": 1,
                "year": 2021
            },
            "ends_at": null,
            "name": "Matrix Algebra for Engineers",
            "license_number": null,
            "display_source": "Coursera",
            "authority": "Coursera",
            "url": "https://www.coursera.org/account/accomplishments/verify/93PY64WDHCXY?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
    ],
    "connections": 1057,
    "people_also_viewed": [],
    "recommendations": [],
    "similarly_named_profiles": [],
    "articles": [],
    "groups": [],
    "skills": [],
    "inferred_salary": null,
    "gender": null,
    "birth_date": null,
    "industry": null,
    "extra": null,
    "interests": [],
    "personal_emails": [],
    "personal_numbers": [],
    "meta": {
        "last_updated": "2025-07-12T19:05:34Z"
    }
}

export type Profile = typeof profile;

export type EducationType = Profile['education'][number];

export type ExperienceType = Profile['experiences'][number];

export type Project = Profile['accomplishment_projects'][number];

export type Certificate = Profile['certifications'][number];

export type VolunteerWork = Profile['volunteer_work'][number];

export type TestScore = Profile['accomplishment_test_scores'][number];

export type Accomplishment = Profile['accomplishment_honors_awards'][number];

export type Publication = Profile['accomplishment_publications'][number];

export type DateTime = ExperienceType['starts_at'] | ExperienceType['ends_at'];

export function getDateTimeString(start: DateTime, end: DateTime): string {
  if(end && start === null){
    return `${end.month}/${end.year}`;
  }
  if(start && end === null){
    return `${start.month}/${start.year} - Present`;
  }
  if(!start || !end){
    return "NA";

  }
  return `${start.month}/${start.year} - /${end.month}/${end.year}`;
}
