import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/font-roboto/roboto.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-toolbar';
import '@polymer/app-layout/app-drawer-layout';

export default class AppLayout extends PolymerElement {
    ready(){
      super.ready();
      var drawerLayout = this.$.drawerLayout;
      this.$.toggle.addEventListener('click', function() {
      if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
          drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
      } else {
        drawerLayout.drawer.toggle();
      }
      });
    }
    static get template() {
      return html `
        <style>
            html {
                --app-drawer-width: 350px;
             }
             body {
                margin: 0;
                font-family: 'Roboto', 'Noto', sans-serif;
                background-color: #eee;
              }
              app-header {
                background-color: #4285f4;
                color: #fff;
              }
              app-header paper-icon-button {
                --paper-icon-button-ink-color: #fff;
              }
              app-drawer-layout {
                --app-drawer-layout-content-transition: margin 0.2s;
              }
              app-drawer {
                --app-drawer-content-container: {
                  background-color: #eee;
                }
              }
              .drawer-content {
                margin-top: 80px;
                height: calc(100% - 80px);
                overflow: auto;
              }
              </style>
            </custom-style>
          
          </head>
          <body unresolved>
          
            <app-header-layout>
          
              <app-header fixed slot="header">
                <app-toolbar>
                  <paper-icon-button id="toggle" icon="menu"></paper-icon-button>
                  <div main-title>Inbox</div>
                </app-toolbar>
              </app-header>
          
              <app-drawer-layout id="drawerLayout">
          
                <app-drawer slot="drawer">
                  <div class="drawer-content">
                    <paper-icon-item>
                      <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Inbox</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="query-builder" slot="item-icon"></iron-icon> <span>Snoozed</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="done" slot="item-icon"></iron-icon> <span>Done</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="drafts" slot="item-icon"></iron-icon> <span>Drafts</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="send" slot="item-icon"></iron-icon> <span>Sent</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="delete" slot="item-icon"></iron-icon> <span>Trash</span>
                    </paper-icon-item>
                    <paper-icon-item>
                      <iron-icon icon="report" slot="item-icon"></iron-icon> <span>Spam</span>
                    </paper-icon-item>
                  </div>
                </app-drawer>
                
                <sample-content size="100">
                  <i-jug></i-jug>
                </sample-content>
          
              </app-drawer-layout>
          
            </app-header-layout>`
    }
  }  
  customElements.define('app-layout', AppLayout);