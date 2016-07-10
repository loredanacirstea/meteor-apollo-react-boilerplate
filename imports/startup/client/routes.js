/*
  set up all routes in the app
  // Import to load these templates
  import '../../ui/layouts/app-body.js';
  import AppContainer from '../../ui/containers/AppContainer.js';
  import ListContainer from '../../ui/containers/ListContainer.js';

  FlowRouter.route('/lists/:_id', {
    name: 'Lists.show',
    action() {
      mount(AppContainer, {
        main: <ListContainer/>,
      });
    },
  });

*/

import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';