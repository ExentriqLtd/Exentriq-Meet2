/**
 * Thresholds for displaying toolbox buttons.
 */
export const THRESHOLDS = [
    {
        width: 520,
        order: [ 'invite', 'chat', 'microphone', 'camera', 'desktop', 'raisehand', 'tileview' ]
    },
    {
        width: 470,
        order: [ 'invite', 'chat', 'microphone', 'camera', 'desktop', 'raisehand' ]
    },
    {
        width: 420,
        order: [ 'invite', 'chat', 'microphone', 'camera', 'desktop' ]
    },
    {
        width: 370,
        order: [ 'invite', 'chat', 'microphone', 'camera' ]
    },
    {
        width: 320,
        order: [ 'invite', 'microphone', 'camera' ]
    },
    {
        width: 270,
        order: [ 'microphone', 'camera' ]
    }
];


export const NOT_APPLICABLE = 'N/A';

export const TOOLBAR_TIMEOUT = 4000;

export const DRAWER_MAX_HEIGHT = '80vh - 64px';

export const NOTIFY_CLICK_MODE = {
    ONLY_NOTIFY: 'ONLY_NOTIFY',
    PREVENT_AND_NOTIFY: 'PREVENT_AND_NOTIFY'
};
