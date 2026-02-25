import React from 'react';

function Dashboard() {
  const metrics = [
    { title: 'Usuarios Activos', value: '1,234', trend: '+12%' },
    { title: 'Ventas del Mes', value: '$45,678', trend: '+8%' },
    { title: 'Conversiones', value: '3.2%', trend: '+0.5%' },
    { title: 'Tiempo Promedio', value: '4m 32s', trend: '-15s' },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Resumen de métricas principales</p>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
            <small style={{ color: metric.trend.startsWith('+') ? '#4caf50' : '#f44336' }}>
              {metric.trend}
            </small>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Actividad Reciente</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            ✅ Nuevo usuario registrado - hace 5 minutos
          </li>
          <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            📦 Pedido #1234 completado - hace 12 minutos
          </li>
          <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            💬 Nuevo comentario en producto - hace 1 hora
          </li>
          <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            🔔 Alerta de stock bajo - hace 2 horas
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
