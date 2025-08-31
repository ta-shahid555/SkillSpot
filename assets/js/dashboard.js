// Hours Chart (Bar)
const ctx1 = document.getElementById('hoursChart');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Hours',
      data: [4, 6, 5, 7, 3, 8, 6],
      backgroundColor: '#ff7a59',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Progress Chart (Doughnut)
const ctx2 = document.getElementById('progressChart');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'In Progress'],
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#ff7a59', '#ffb6c1'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#333' }
      }
    }
  }
});
