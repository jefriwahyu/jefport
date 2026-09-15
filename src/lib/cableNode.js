/**
 * Shared live position of the scroll-cable node in viewport coordinates.
 * Written by ScrollCable every frame, read by ambient layers (DustField)
 * so they can react to the node without prop drilling or events.
 * Defaults far off-screen so nothing reacts before the first update.
 */
export const cableNode = { x: -9999, y: -9999 };
