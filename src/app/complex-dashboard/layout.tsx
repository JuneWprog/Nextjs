import React from 'react';

export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
  dashlogin,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  dashlogin: React.ReactNode;
}) {
  const isLogin = false;
  //  This is an example conditional route
  //  login display dashboard, otherwith display login
  //  url is the same /complex-dashboard
  return isLogin ? (
    <div>
      <h1>Complex Dashboard Layout</h1>
      <p>This is an example parallel route</p>
      <p> url: /complex-dashboard</p>
      <div>{children}</div>
      <div>
        <h2>Parallel Route</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="card">
            <p>Slot 1</p>
            {users}
          </div>
          <div className="card">
            <p>Slot 2</p>
            {revenue}
          </div>
        </div>
        <div className="card">
          <p>Slot 3</p>
          {notification}
        </div>
      </div>
    </div>
  ) : React.isValidElement(dashlogin) ? (
    dashlogin
  ) : (
    <p>Invalid login content</p>
  );
}
