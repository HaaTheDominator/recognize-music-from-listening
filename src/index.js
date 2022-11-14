import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routers/root';
import { ErrorPage } from './routers/error-page';
import { Hello } from './pages/hello/hello';
import { Settings } from './pages/settiings/settings';
import { Upload } from './pages/upload/upload';
import { Recognize } from './pages/recognize/recognize';
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: 'home',
      element: <App />
    },
    {
      path: '/',
      element: <Hello />
    },
    {
      path: 'settings',
      element: <Settings />
    },
    {
      path: 'upload',
      element: <Upload />
    },
    {
      path: 'recognize',
      element: <Recognize />
    }
  ]
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
