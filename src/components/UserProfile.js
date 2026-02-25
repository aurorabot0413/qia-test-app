import React from 'react';

function UserProfile() {
  const user = {
    name: 'Cristian Rojas',
    email: 'cris@example.com',
    role: 'CTO',
    company: 'Aurora Corp',
    joinDate: 'Enero 2024',
    projects: 12,
    commits: 287,
  };

  return (
    <div className="profile-container">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <div className="profile-info">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        <p><strong>Empresa:</strong> {user.company}</p>
        <p><strong>Miembro desde:</strong> {user.joinDate}</p>
      </div>

      <div className="metrics-grid" style={{ marginTop: '30px' }}>
        <div className="metric-card">
          <h3>Proyectos</h3>
          <div className="metric-value">{user.projects}</div>
        </div>
        <div className="metric-card">
          <h3>Commits</h3>
          <div className="metric-value">{user.commits}</div>
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button className="btn-primary" style={{ maxWidth: '200px' }}>
          Editar Perfil
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
