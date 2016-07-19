// helpers
export const BLOCK_TOP_LEFT                 = 0;
export const BLOCK_TOP                      = 1;
export const BLOCK_CENTER                   = 2;
export const BLOCK_BOTTOM                   = 3;
export const ACTION_ADD                     = 0;
export const ACTION_REMOVE                  = 1;
export const ACTION_UPDATE                  = 2;
export const HIGHLIGHT_NODE_ON_SELECT       = "select";
export const HIGHLIGHT_NODE_ON_DESELECT     = "deselect";
export const HIGHLIGHT_NODE_ON_ADD          = "add";

// settings
export const DEFAULT_NEW_NODE_LABEL                 = "New Node";
export const DEFAULT_INITIAL_GRID_COLS              = 4;
export const DEFAULT_INITIAL_GRID_ROWS              = 2;
export const DEFAULT_BLOCK_WIDTH                    = 80;
export const DEFAULT_BLOCK_HEIGHT                   = 80;
export const DEFAULT_COL_SPACING                    = 20;
export const DEFAULT_ROW_SPACING                    = 40;
export const DEFAULT_LABEL_SPACING                  = 5;
export const DEFAULT_DISABLE_CONTROL_NODES          = false;
export const DEFAULT_MAX_VIEWPORT_WIDTH_INCREASE    = 100;
export const DEFAULT_MAX_VIEWPORT_HEIGHT_INCREASE   = 100;
export const DEFAULT_HIGHLIGHT_NODE_ON              = [ HIGHLIGHT_NODE_ON_SELECT, HIGHLIGHT_NODE_ON_ADD ]; // HIGHLIGHT_NODE_ON_SELECT | HIGHLIGHT_NODE_ON_DESELECT | HIGHLIGHT_NODE_ON_ADD