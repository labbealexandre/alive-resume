/*[object Object]*/
import styled from 'styled-components';

import { Transformation } from './types';

const getTranslation = ({ translation: { x, y, z } }: Transformation) =>
  `translate3d(${x}px, ${y}px, ${z}px) `;

const getScale = ({ scale: { x, y, z } }: Transformation) => `scale3d(${x}, ${y}, ${z}) `;

const getRotation = ({ rotation: { x, y, z } }: Transformation) =>
  `rotateZ(${z}deg) rotateY(${y}deg) rotateX(${x}deg) `;

const getPerspective = ({ perspective: { x } }: Transformation) => `${x}px`;

export const Container = styled.div`
  transform-origin: center;
  transform: ${getRotation};
  transition: 0.3s;
  display: inline-block;
  height: 100%;
`;

export const Frame = styled.div`
  transform: ${getTranslation} ${getScale};
  transition: 0.3s;
  height: 100%;
  perspective: ${getPerspective};
`;
