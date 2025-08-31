const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

fetch("assets/json/skill-details.json")
  .then((res) => res.json())
  .then((data) => {
    const courseList = data.course;
    const course = courseList.find(item => item.id === courseId);

    if (!course) {
      document.body.innerHTML = "<h2>Course Not Found</h2>";
      return;
    }

    // Populate Banner
    document.getElementById("courseImage").src = course.image;
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseInstructor").textContent = "Instructor: " + course.instructor;
    document.getElementById("courseShortDescription").textContent = course.short_description;

    // 2. About the Instructor
    const instructorSection = document.querySelector(".instructor-card").parentElement;
    if (course.instructorDetails) {
      document.getElementById("instructorImage").src = course.instructorDetails.image || "assets/images/default-instructor.jpg";
      document.getElementById("instructorName").textContent = course.instructorDetails.name || course.instructor;
      document.getElementById("instructorTitle").textContent = course.instructorDetails.title || "";
      document.getElementById("instructorBio").textContent = course.instructorDetails.bio || "";
    } else {
      document.getElementById("instructorName").textContent = course.instructor;
      document.getElementById("instructorTitle").textContent = "Instructor";
      document.getElementById("instructorBio").textContent = "";
      instructorSection.style.display = "none";
    }
    // 3. Description
    const courseDescriptionList = document.getElementById("courseDescriptionList");
    courseDescriptionList.innerHTML = ""; // clear existing <p> tags

    if (Array.isArray(course.description)) {
      course.description.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        courseDescriptionList.appendChild(p);
      });
    } else {
      // if it's a single string
      const p = document.createElement("p");
      p.textContent = course.description;
      courseDescriptionList.appendChild(p);
    }
  })
  .catch((err) => {
    console.error("Error fetching course data:", err);
  });




  