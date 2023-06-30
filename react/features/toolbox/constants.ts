/**
 * Thresholds for displaying toolbox buttons.
 */
export const THRESHOLDS = [
    {
        width: 565,
        // eslint-disable-next-line max-len
        order: [ 'invite', 'microphone', 'camera', 'desktop', 'chat', 'raisehand', 'reactions', 'tileview' ]
    },
    {
        width: 520,
        order: [ 'invite', 'microphone', 'camera', 'desktop', 'chat', 'raisehand', 'tileview' ]
    },
    {
        width: 470,
        order: [ 'invite', 'microphone', 'camera', 'desktop', 'chat', 'raisehand' ]
    },
    {
        width: 420,
        order: [ 'invite', 'microphone', 'camera', 'desktop', 'chat' ]
    },
    {
        width: 370,
        order: [ 'invite', 'microphone', 'camera', 'chat' ]
    },
    {
        width: 225,
        order: [ 'invite', 'microphone', 'camera' ]
    },
    {
        width: 200,
        order: [ 'invite', 'microphone' ]
    }
];

export const NOT_APPLICABLE = 'N/A';

export const TOOLBAR_TIMEOUT = 4000;

export const DRAWER_MAX_HEIGHT = '80vh - 64px';

export const NOTIFY_CLICK_MODE = {
    ONLY_NOTIFY: 'ONLY_NOTIFY',
    PREVENT_AND_NOTIFY: 'PREVENT_AND_NOTIFY'
};

// Around 300 to be displayed above components like chat
export const ZINDEX_DIALOG_PORTAL = 302;

/**
 * Color for spinner displayed in the toolbar.
 */
export const SPINNER_COLOR = '#929292';
