/**
 * style.js
 * Font Awesome icons and CSS styles used within the front-end app
 */

// CSS Styles
import './stylesheets/main.less';

// Font Awesome Icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faDiceD6,
  faObjectGroup,
  faCode,
  faServer,
  faAtom,
  faHome,
  faBriefcase,
  faFlask,
  faGraduationCap,
  faDownload,
  faUserCircle,
  faAddressCard,
  faSitemap,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const fontAwesomeLibrary = library.add(
    fab,
    faDiceD6,
    faObjectGroup,
    faCode,
    faServer,
    faAtom,
    faHome,
    faBriefcase,
    faFlask,
    faGraduationCap,
    faDownload,
    faUserCircle,
    faAddressCard,
    faSitemap,
    faSignOutAlt
);
