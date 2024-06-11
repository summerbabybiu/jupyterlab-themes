import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @openpie/jupyterTheme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@openpie/jupyterTheme:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @openpie/jupyterTheme is activated!');
    const style = '@openpie/jupyterTheme/index.css';

    manager.register({
      name: '@openpie/jupyterTheme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
