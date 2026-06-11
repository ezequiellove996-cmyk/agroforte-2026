// ================================
// AgroForte 2026 - JavaScript
// ================================

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar o gráfico
  initChart();
});

/**
 * Inicializa o gráfico de crescimento da produção agrícola
 */
function initChart() {
  const ctx = document.getElementById('grafico');
  
  if (!ctx) {
    console.error('Elemento de gráfico não encontrado');
    return;
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024', '2025', '2026'],
      datasets: [{
        label: 'Produção Agrícola (Milhões de Toneladas)',
        data: [65, 78, 95, 120, 145],
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(34, 197, 94, 0.7)'
        ],
        borderColor: [
          'rgba(22, 163, 74, 1)',
          'rgba(22, 163, 74, 1)',
          'rgba(22, 163, 74, 1)',
          'rgba(22, 163, 74, 1)',
          'rgba(22, 163, 74, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: 'rgba(22, 163, 74, 0.9)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            font: {
              size: 14,
              weight: 'bold'
            },
            color: '#22c55e',
            padding: 15
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 12
            },
            color: '#666'
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.1)'
          }
        },
        x: {
          ticks: {
            font: {
              size: 12
            },
            color: '#666'
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

/**
 * Função para scroll suave (se necessário em futuras features)
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Log de inicialização
 */
console.log('✅ AgroForte 2026 - Sistema carregado com sucesso');