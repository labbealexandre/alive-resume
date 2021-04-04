/*[object Object]*/
export type Coord = {
  x: number;
  y: number;
  z: number;
};

export type Transformation = {
  translation: Coord;
  scale: Coord;
  rotation: Coord;
  perspective: Coord;
};

export type ShowProps = {
  show: boolean;
  toggleShow?: () => void;
};

export const defaultCoord: Coord = { x: 0, y: 0, z: 0 };

export const defaultTransformation: Transformation = {
  translation: defaultCoord,
  scale: { x: 1, y: 1, z: 1 },
  rotation: defaultCoord,
  perspective: defaultCoord,
};

export type Dimensions = {
  size: Coord;
  position: Coord;
  origin: Coord;
};
