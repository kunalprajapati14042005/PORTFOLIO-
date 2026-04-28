export default function App() {
  const projects = [
    {
      title: "Task Management App",
      tech: "React, Node.js, Express, MongoDB",
      desc: "A full-stack task management platform with authentication and CRUD operations.",
      github: "https://github.com/kunalprajapati14042005",
    },
    {
      title: "Weather Dashboard",
      tech: "HTML, CSS, JavaScript, API",
      desc: "Weather application using API integration with responsive design.",
      github: "https://github.com/kunalprajapati14042005",
    },
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS",
      desc: "Modern portfolio website showcasing skills and projects.",
      github: "https://github.com/kunalprajapati14042005",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <img
            src="/Profile photo.png"
            alt="profile"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
            Kunal Prajapati
          </h1>

          <h2 style={{ color: "gray", marginBottom: "20px" }}>
            Full Stack Developer
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.7",
            }}
          >
            Passionate Computer Science student focused on full stack
            development, problem solving, and building modern web applications.
          </p>
        </div>

        {/* Skills */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Skills</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "15px",
            }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "MongoDB",
              "GitHub",
              "DSA",
            ].map((skill) => (
              <div
                key={skill}
                style={{
                  background: "#f3f4f6",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: "#f9fafb",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <h3>{project.title}</h3>

                <p style={{ color: "gray" }}>{project.tech}</p>

                <p style={{ marginTop: "10px", marginBottom: "15px" }}>
                  {project.desc}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  style={{
                    background: "black",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Contact</h2>

          <p>Email: yourmail@example.com</p>

          <p>Location: Gurugram, Haryana</p>

          <a
            href="https://github.com/kunalprajapati14042005"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "black",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}