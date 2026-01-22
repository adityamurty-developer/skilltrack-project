const skillsData = {
  web: {
    title: "Web Development",
    desc: "Become a Web Developer by mastering frontend & backend fundamentals.",
    logo: "assets/tech/web.png",

    stack: [
      { name: "HTML", icon: "assets/tech/html.png" },
      { name: "CSS", icon: "assets/tech/css.png" },
      { name: "JavaScript", icon: "assets/tech/js.png" },
      { name: "Bootstrap", icon: "assets/tech/bootstrap.png" } // ✅ EXTRA
    ],

    companies: [
      "assets/companies/google.png",
      "assets/companies/amazon.png",
      "assets/companies/microsoft.png",
      "assets/companies/flipkart.png"
    ]
  },

  frontend: {
    title: "Frontend Development",
    desc: "Build beautiful, responsive and interactive user interfaces.",
    logo: "assets/tech/frontend.png",

    stack: [
      { name: "HTML", icon: "assets/tech/html.png" },
      { name: "CSS", icon: "assets/tech/css.png" },
      { name: "JavaScript", icon: "assets/tech/js.png" },
      { name: "React", icon: "assets/tech/react.png" } // ✅ EXTRA
    ],

    companies: [
      "assets/companies/google.png",
      "assets/companies/meta.png",
      "assets/companies/netflix.png",
      "assets/companies/airbnb.png"
    ]
  },

  backend: {
    title: "Backend Development",
    desc: "Design scalable servers, APIs and databases.",
    logo: "assets/tech/backend.png",

    stack: [
      { name: "Node.js", icon: "assets/tech/node.png" },
      { name: "Express", icon: "assets/tech/express.png" },
      { name: "REST API", icon: "assets/tech/api.png" },
      { name: "MySQL", icon: "assets/tech/mysql.png" } // ✅ ADDED AS YOU SAID
    ],

    companies: [
      "assets/companies/amazon.png",
      "assets/companies/uber.png",
      "assets/companies/paytm.png",
      "assets/companies/zomato.png"
    ]
  },

  fullstack: {
    title: "Full Stack Development",
    desc: "Master both frontend & backend technologies.",
    logo: "assets/tech/fullstack.png",

    stack: [
      { name: "HTML", icon: "assets/tech/html.png" },
      { name: "CSS", icon: "assets/tech/css.png" },
      { name: "JavaScript", icon: "assets/tech/js.png" },
      { name: "Node.js", icon: "assets/tech/node.png" }
    ],

    companies: [
      "assets/companies/google.png",
      "assets/companies/amazon.png",
      "assets/companies/microsoft.png",
      "assets/companies/startup.png"
    ]
  },

  mern: {
    title: "MERN Stack",
    desc: "Build modern full stack apps using MERN.",
    logo: "assets/tech/mern.png",

    stack: [
      { name: "MongoDB", icon: "assets/tech/mongodb.png" },
      { name: "Express", icon: "assets/tech/express.png" },
      { name: "React", icon: "assets/tech/react.png" },
      { name: "Node.js", icon: "assets/tech/node.png" }
    ],

    companies: [
      "assets/companies/meta.png",
      "assets/companies/netflix.png",
      "assets/companies/amazon.png",
      "assets/companies/startup.png"
    ]
  },

  data: {
    title: "Data Analyst",
    desc: "Analyze data to extract meaningful insights.",
    logo: "assets/tech/data.png",

    stack: [
      { name: "Python", icon: "assets/tech/python.png" },
      { name: "SQL", icon: "assets/tech/sql.png" },
      { name: "Excel", icon: "assets/tech/excel.png" },
      { name: "Power BI", icon: "assets/tech/powerbi.png" }
    ],

    companies: [
      "assets/companies/deloitte.png",
      "assets/companies/ey.png",
      "assets/companies/kpmg.png",
      "assets/companies/pwc.png"
    ]
  }
};

/* ================= LOAD DATA ================= */
const params = new URLSearchParams(window.location.search);
const skillKey = params.get("skill") || "web";
const skill = skillsData[skillKey];

document.getElementById("skillTitle").innerText = skill.title;
document.getElementById("skillDesc").innerText = skill.desc;
document.getElementById("skillLogo").src = skill.logo;

/* STACK */
const stackList = document.getElementById("stackList");
stackList.innerHTML = "";
skill.stack.forEach(s => {
  stackList.innerHTML += `
    <li>
      <img src="${s.icon}" />
      ${s.name}
    </li>
  `;
});

/* COMPANIES */
const companyBox = document.getElementById("companyLogos");
companyBox.innerHTML = "";
skill.companies.forEach(c => {
  companyBox.innerHTML += `<img src="${c}" />`;
});


