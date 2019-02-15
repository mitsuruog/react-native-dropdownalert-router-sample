import React from 'react';
import { Router, Overlay, Modal, Lightbox, Stack, Scene, Tabs } from 'react-native-router-flux';

import { Home } from './pages/Home';
import { One } from './pages/One';
import { Two } from './pages/Two';
import { Three } from "./pages/Three";

export const AppRoute = () => (
  <Router>
    <Overlay key="overlay">
      <Modal key="modal">
        <Lightbox key="lightbox" hideNavBar>
          <Stack key="root">
            <Scene key="page_home" component={Home} hideNavBar />
            <Scene key="page_1" component={One} />
            <Scene key="page_2" component={Two} />
            <Scene key="page_3" component={Three} />
          </Stack>
        </Lightbox>
      </Modal>
    </Overlay>
  </Router>
);

