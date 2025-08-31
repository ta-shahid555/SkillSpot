function filterCourses(category) {
  const cards = document.querySelectorAll('.item');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function showPopup(id, title, description, requirements, instructor) {
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupDescription').innerText = description;
  document.getElementById('popupRequirements').innerText = 'Requirements: ' + requirements;
  document.getElementById('popupInstructor').innerText = 'Instructor: ' + instructor;

  // Use the exact ID from JSON
  document.getElementById('course-detail-btn').href = `skill-details.html?id=${id}`;

  document.getElementById('coursePopup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('coursePopup').style.display = 'none';
}
