import { css } from 'styled-components';
import { ElevationSchema, ElevationSemantic } from './types';

const Elevation: ElevationSchema = {
  
}

const getElevationBoxShadow = (elevation: ElevationSemantic) => {
  switch (elevation) {
    case 'raised':
      return '0px';
    case 'sunken':
      return '0px';
    case 'overlay':
      return '0px';
    default:
      return '0px';
  }
}

export const getElevationCss = css<{ elevation: ElevationSemantic }>`
  box-shadow: ${p => getElevationBoxShadow(p.elevation)}
`;
