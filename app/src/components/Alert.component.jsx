/**
 * Alert.component.jsx
 * Components for different alert types
 */

/**
 * Node Modules
 */
import React from 'react';

/**
 * Simple Alert Component
 */

export const Alert = ({type, message}) => (
  <div className = {type}>
    <span>
      {message}
    </span>
  </div>
);
