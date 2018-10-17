// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for skills page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import SkillsContent from '../components/SkillsContent';
// ----------------------------------------------------------------------------

// Skills Page ----------------------------------------------------------------
const Skills = () => (                                                          // Skills page component
  <div className = "col page">
    <h1 className = "text-center">Skills</h1>
    <SkillsContent />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Skills                                                           // Export skills page component
// ----------------------------------------------------------------------------
