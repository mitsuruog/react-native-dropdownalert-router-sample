import React from 'react';
import { Router, Overlay, Modal, Lightbox, Stack, Scene, Tabs } from 'react-native-router-flux';

import { Home } from './pages/Home';
import { One } from './pages/One';
import { Two } from './pages/Two';

export const AppRoute = () => (
  <Router>
    <Overlay key="overlay">
      <Modal key="modal">
        <Lightbox key="lightbox" hideNavBar>
          <Stack key="root" hideNavBar>
            <Tabs key="tabs">
              <Stack key="tabs_1">
                <Scene key="page_home" component={Home} />
              </Stack>
              <Stack key="tabs_2">
                <Scene key="page_one" component={One}/>
              </Stack>
              <Stack key="tabs_3">
                <Scene key="page_two" component={Two}/>
              </Stack>
            </Tabs>
          </Stack>
        </Lightbox>
      </Modal>
    </Overlay>
  </Router>
);

