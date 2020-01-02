import React from 'react';
import { authenticationService } from '../_services/authentication.service';

const HomePage = () => {
  return (
    <div> Welcome to homepage, {authenticationService.currentUserValue().user.name} </div>
  );
}

export default HomePage;
