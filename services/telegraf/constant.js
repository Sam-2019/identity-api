export const questions = [
  {
    question: "How many faculties does UniMAC-IJ have?",
    answer: {
      text: "The Institute has",
      sub_text: "",
      real_answer: [
        {
          id: 1,
          value: "Faculty of Public Relations, Advertising & Marketing (FOPAM)",
        },
        { id: 2, value: "Faculty of Journalism Media Studies (FOJOMS)" },
        {
          id: 3,
          value: "Faculty of Integrated and Communication Sciences (FOICOS)",
        },
        { id: 4, value: "School of Graduate Studies and Research (SOGSAR)" },
        { id: 5, value: "School of Alternate Learning (SAL)" },
      ],
    },
  },
  {
    question: "What are the library hours?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        {
          period: "Semester in session",
          working_days: [
            {
              days: "Monday - Friday",
              hours: "8:30 am - 7:30 pm",
            },
            {
              days: "Saturday - Sunday",
              hours: "10:00 am - 4:00 pm",
            },
          ],
        },
        {
          period: "Inter-semester break",
          working_days: [
            {
              days: "Monday - Friday",
              hours: "8:30 am - 4:00 pm",
            },
          ],
        },
      ],
    },
  },
  {
    question: "How do I apply for financial aid on campus?",
    answer: {
      text: "",
      real_answer: [
        {
          id: 1,
          value:
            "The completed application forms can be sent through hr@gij.edu.gh or submitted by hand at the Academic Affairs Registry before the deadline.",
        },
        { id: 2, value: "Forms submitted late will be disqualified." },
        {
          id: 3,
          value:
            "Only shortlisted applicants will be notified after the deadline.",
        },
      ],
    },
  },
  {
    question: "What is the UniMAC-IJ campus address?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        {
          campus: [
            { campus: "Osu Campus", street: "32nd Gamel Abdul Nasser Road" },
            {
              campus: "Dzorwulu Campus",
              street:
                "No. 5 Alboran Street, South Legon (Dzorwulu Industrial Area)",
            },
          ],
        },
        {
          address: [
            { id: 1, key: "Address", value: "P. O. Box GP 667, Accra" },
            { id: 2, key: "Phone", value: "(+233) 302 228336" },
            { id: 3, key: "Fax", value: "+233 302 221750" },
            { id: 4, key: "Email", value: "info@gij.edu.gh" },
          ],
        },
      ],
    },
  },
  {
    question: "Any upcoming campus events?",
    answer: {
      text: "Graduation Ceremony for the Class of 2023",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "How do I reset my password for the student portal?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        {
          id: 1,
          value: "Visit this link https://students.unimac.edu.gh/login",
        },
        { id: 1, value: "Log into your students' dashboard" },
        { id: 2, value: "Click on Dropbox on the top left" },
        { id: 3, value: "Select Password reset" },
        { id: 4, value: "Follow prompts" },
      ],
    },
  },
  {
    question: "How can I access the student portal?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        {
          id: 1,
          value: "Visit this link https://students.unimac.edu.gh/login",
        },
        {
          id: 2,
          value:
            "Enter your Student Identity Number and Password respectively in the spaces provided.",
        },
        {
          id: 3,
          value: "Your default password is the same as your Student ID number",
        },
      ],
    },
  },
  {
    question: "What's the Student Wi-Fi password?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        { id: 1, campus: "Osu Campus", password: "" },
        { id: 2, campus: "Dzorwulu Campus", password: "GIJ@W1f1" },
      ],
    },
  },
  {
    question: "When will the end-of-semester results be released?",
    answer: {
      text: "Results will be uploaded by the end of November 2023.",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "How do I apply for scholarships on campus?",
    answer: {
      text: "Results will be uploaded by the end of November 2023.",
      sub_text: "",
      real_answer: [
        { id: 1, value: "Go through the academic’s affairs" },
        { id: 2, value: "Pick a form if you are eligible" },
        { id: 3, value: "Submit all necessary documentation" },
      ],
    },
  },
  {
    question: "How do I apply for admissions?",
    answer: {
      text: "HOW TO APPLY",
      sub_text: "",
      real_answer: [
        {
          id: 1,
          value:
            "An applicant must pay the relevant application fee at any Fidelity Bank branch by providing the applicant's name and telephone number.",
        },
        {
          id: 2,
          value:
            "You will be provided with your application number/ transaction ID at the bank that will grant you access to the Online Admission Portal.",
        },
        {
          id: 3,
          value:
            "Or you visit the academic affairs at the Dzorwulu campus to pick up forms in person.",
        },
      ],
    },
  },
  {
    question: "How do I get my student ID replaced?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        { id: 1, value: "Go to academic affairs at the Dzorwulu campus" },
        { id: 2, value: "There’s an online platform called ROLLPAY" },
        { id: 3, value: "Enter your details" },
        { id: 4, value: "Pay an amount of 50ghcs" },
        { id: 5, value: "The app will generate a receipt for you instantly." },
        { id: 6, value: "Use the receipt as confirmation of payment" },
        { id: 7, value: "Take a picture" },
        { id: 8, value: "Print your card instantly." },
      ],
    },
  },
  {
    question: "How do I file a complaint for missing scores?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        {
          id: 1,
          value:
            "Put together all documents containing evidence of participation.",
        },
        {
          id: 2,
          value:
            "Speak to your course rep to channel your complaint to the lecturer.",
        },
      ],
    },
  },
  {
    question: "How much does it cost to retake a course?",
    answer: {
      text: "As issued and signed by the Academic Affairs of the institute, the registration fee per a referred paper is GH₵150.",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "How much is SRC dues?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        { id: 1, value: "Freshmen are required to pay GHC90.0" },
        { id: 2, value: "Continuing students are required to pay GHC50.00" },
      ],
    },
  },
  {
    question: "When is the deadline for admissions?",
    answer: {
      text: "October 31st, 2023",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "How do I get my transcript?",
    answer: {
      text: "",
      sub_text: "",
      real_answer: [
        { id: 1, value: "Apply through academic affairs" },
        { id: 2, value: "pay an amount of 50 cedis" },
        { id: 3, value: "receive your transcript." },
      ],
    },
  },
  {
    question: "Who is the Rector?",
    answer: {
      text: "Prof. Eric Opoku Mensah, a scholar in Rhetoric and Media Studies, is the Acting Rector for UniMAC-GIJ",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "Who is the Dean of students?",
    answer: {
      text: "Mrs Rhodalene Amartey",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "Does the school have a website?",
    answer: {
      text: "Yes",
      sub_text: "",
      real_answer: [{ id: 1, text: "Link", value: "https://gij.edu.gh/" }],
    },
  },
  {
    question: "When can students begin course registrations?",
    answer: {
      text: "November 1st, 2023",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "What is the deadline for course registration for 2023/2024?",
    answer: {
      text: "November 31st, 2023",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "When is graduation for the 2023/2024 batch?",
    answer: {
      text: "The date will be communicated.",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "Are there any social groups or halls on campus?",
    answer: {
      text: "Yes. See the halls below.",
      sub_text: "",
      real_answer: [
        { id: 1, value: "Osagyefo Hall" },
        { id: 2, value: "Yaa Asantewaa Hall" },
        { id: 3, value: "Mandela Hall." },
        { id: 4, value: "Sutherland Hall." },
      ],
    },
  },
  {
    question:
      "How long does it take to get my results resolved after complaining?",
    answer: {
      text: "At most 2 weeks.",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "How do I report an abusive lecturer harassing me?",
    answer: {
      text: "Speak to the counselling unit or Dean of students",
      sub_text: "",
      real_answer: [],
    },
  },
  {
    question: "Are there any counsellors available?",
    answer: {
      text: "Yes, and it’s the Career and counselling unit.",
      sub_text:
        "The Career Guidance and Counselling Unit offers the following services but not limited to:",
      real_answer: [
        { id: 1, value: "Individual / Group Counselling", sub: [] },
        {
          id: 2,
          value: "Career Guidance",
          sub: [{ id: 1, value: "Career Decision / Choice" }],
        },
        {
          id: 3,
          value: "Academic Support Services",
          sub: [
            { id: 1, value: "Time Management" },
            { id: 2, value: "Study Habits / Skills" },
          ],
        },
        {
          id: 4,
          value: "Relationship Management",
          sub: [
            { id: 1, value: "Dating" },
            { id: 2, value: "Marriage Counselling" },
          ],
        },
        {
          id: 5,
          value: "Socio- Personal Counselling",
          sub: [
            { id: 1, value: "Self-Esteem" },
            { id: 2, value: "Social Adjustment" },
            { id: 3, value: "Societal Challenges" },
          ],
        },
        {
          id: 6,
          value: "Psycho Emotional Counselling",
          sub: [
            { id: 1, value: "Crisis Management" },
            { id: 2, value: "Stress / Depression Management" },
            { id: 3, value: "HIV" },
          ],
        },
        {
          id: 7,
          value: "Organization of Career Conferences and Educational Fairs",
          sub: [],
        },
        { id: 8, value: "Work / Home Stress Management", sub: [] },
        { id: 9, value: "Family Counselling and Support Services", sub: [] },
        {
          id: 10,
          value:
            "Organization of Seminars and Workshops for students and staff",
          sub: [],
        },
        { id: 11, value: "Scholarship Services", sub: [] },
      ],
    },
  },
];

export const faqs = [
  {
    question: "How many faculties does UniMAC-IJ have?",
    answer:
      "The Institute has,\n\n1. Faculty of Public Relations, Advertising & Marketing (FOPAM)\n2. Faculty of Journalism Media Studies (FOJOMS)\n3. Faculty of Integrated and Communication Sciences (FOICOS)\n4. School of Graduate Studies and Research (SOGSAR)\n5. School of Alternate Learning (SAL)",
  },
  {
    question: "What are the library hours?",
    answer:
      "Semester in session\n• Monday – Friday: 8:30 am – 7:30 pm\n• Saturday – Sunday: 10:00 am – 4:00 pm\n\nInter-semester break\n• Monday – Friday: 8:30 am – 4:00 pm",
  },
  {
    question: "How do I apply for financial aid on campus?",
    answer:
      "The completed application forms can be sent through hr@gij.edu.gh or submitted by hand at the Academic Affairs Registry before the deadline. Forms submitted late will be disqualified. Only shortlisted applicants will be notified after the deadline.",
  },
  {
    question: "What is the UniMAC-IJ campus address?",
    answer:
      "Osu Campus:\n32nd Gamel Abdul Nasser Road\n\nDzorwulu Campus:\nNo. 5 Alboran Street, South Legon (Dzorwulu Industrial Area)\n\nAddress: P. O. Box GP 667, Accra\nPhone:(+233) 302 228336\nFax: +233 302 221750\nEmail: info@gij.edu.gh",
  },
  {
    question: "Any upcoming campus events?",
    answer: "Graduation Ceremony for the Class of 2023",
  },
  {
    question: "How do I reset my password for the student portal?",
    answer:
      "Visit this link https://students.unimac.edu.gh/login\n\n1. Click on the link to Log into your students' dashboard\n2. Click on Dropbox on the top left\n3. Select Password reset\n4. Follow prompts",
  },
  {
    question: "How can I access the student portal?",
    answer:
      "Visit this link https://students.unimac.edu.gh/login\nEnter your Student Identity Number and Password respectively in the spaces provided.\n\nYour default password is the same as your 'Student ID number'",
  },
  {
    question: "What's the Student Wi-Fi password?",
    answer: "Osu Campus:\n\nDzorwulu Campus: GIJ@W1f1",
  },
  {
    question: "When will the end-of-semester results be released?",
    answer: "Results will be uploaded by the end of November 2023.",
  },
  {
    question: "How do I apply for scholarships on campus?",
    answer:
      "Go through the academic’s affairs, pick a form if you are eligible and submit all necessary documentation",
  },
  {
    question: "How do I apply for admissions?",
    answer:
      "HOW TO APPLY\n\n~ An applicant must pay the relevant application fee at any Fidelity Bank branch by providing the applicant's name and telephone number.\n~ You will be provided with your application number/ transaction ID at the bank that will grant you access to the Online Admission Portal.\nOr you visit the academic affairs at the Dzorwulu campus to pick up forms in person.",
  },
  {
    question: "How do I get my student ID replaced?",
    answer:
      "Go to academic affairs at the Dzorwulu campus, there’s an online platform called ROLLPAY, enter your details, and pay an amount of 50ghc, and the app will generate a receipt for you instantly.  Use the receipt as confirmation of payment, take a picture, and print your card instantly.",
  },
  {
    question: "How do I file a complaint for missing scores?",
    answer:
      "Put together all documents containing evidence of participation.\nSpeak to your course rep to channel your complaint to the lecturer.",
  },
  {
    question: "How much does it cost to retake a course?",
    answer:
      "As issued and signed by the Academic Affairs of the institute, the registration fee per a referred paper is GH₵150.",
  },
  {
    question: "How much is SRC dues?",
    answer:
      "Freshmen are required to pay GHC90.00\nContinuing Students are required to pay GHC50.00",
  },
  {
    question: "When is the deadline for admissions?",
    answer: "October 31st, 2023",
  },
  {
    question: "How do I get my transcript?",
    answer:
      "Apply through academic affairs, pay an amount of 50 cedis, receive your transcript.",
  },
  {
    question: "Who is the Rector?",
    answer:
      "Prof. Eric Opoku Mensah, a scholar in Rhetoric and Media Studies, is the Acting Rector for UniMAC-GIJ",
  },
  {
    question: "Who is the Dean of students?",
    answer: "Mrs Rhodalene Amartey",
  },
  {
    question: "Does the school have a website?",
    answer: "Yes. https://gij.edu.gh/",
  },
  {
    question: "When can students begin course registrations?",
    answer: "November 1st, 2023",
  },
  {
    question: "What is the deadline for course registration for 2023/2024?",
    answer: "November 31st, 2023",
  },
  {
    question: "When is graduation for the 2023/2024 batch?",
    answer: "The date will be communicated.",
  },
  {
    question: "Are there any social groups or halls on campus?",
    answer: "Osagyefo Hall\nYaa Asantewaa Hall\nMandela Hall\nSutherland Hall",
  },
  {
    question:
      "How long does it take to get my results resolved after complaining?",
    answer: "At most 2 weeks.",
  },
  {
    question: "How do I report an abusive lecturer harassing me?",
    answer: "Speak to the counselling unit or Dean of students",
  },
  {
    question: "Are there any counsellors available?",
    answer:
      "Yes, and it’s the Career and counselling unit.\n\nThe Career Guidance and Counselling Unit offers the following services but not limited to:\n\nIndividual / Group Counselling\nCareer Guidance\nCareer Decision / Choice\nAcademic Support Services\nTime Management,\nStudy Habits / Skills\nRelationship Management\nDating\nMarriage Counselling\nSocio- Personal Counselling\nSelf-Esteem\nAssertiveness\nSocial Adjustment,\nSocietal Challenges\nPsycho Emotional Counselling\nCrisis Management\nStress / Depression Management,\nHIV\nOrganization of Career Conferences and Educational Fairs\nWork / Home Stress Management\nFamily Counselling and Support Services\nOrganization of Seminars and Workshops for students and staff\nScholarship Services",
  },
];

export const welcomeMessage = (username) => {
  return `Hello ${username},\n\nWelcome to UniMAC Campus Buddy.\nHow may I help you?`;
};

export const salutations = ["hi", "Hi", "hello", "Hello"];

export const unsupported_message = "I dont quite understand.";
