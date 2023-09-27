import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import SaveDonation from './components/SaveDonation/SaveDonation';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('donation.json')
      },
      {
        path: '/:id',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('donation.json')
      },
      {
        path: '/donation',
        element: <SaveDonation></SaveDonation>,
        loader: ()=> fetch('donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=> fetch('donation.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
